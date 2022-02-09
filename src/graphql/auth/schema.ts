import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils'
import { GraphQLSchema, defaultFieldResolver } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFilesSync } from '@graphql-tools/load-files'

import { AuthDirective} from '../../types/auth'
import getUser from './getUser'

const authDirective:AuthDirective = ( directiveName, getUserFn) => {
    const typeDirectiveArgumentMaps: Record<string, any> = {}
    return {
      authDirectiveTypeDefs: [...loadFilesSync('src/graphql/auth/directive.gql')],
      authDirectiveTransformer: (schema: GraphQLSchema) => mapSchema(schema, {
        [MapperKind.TYPE]: type => {
            const authDirective = getDirective(schema, type, directiveName)?.[0]
            if (authDirective) typeDirectiveArgumentMaps[type.name] = authDirective
            return undefined
        },
        [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
            const authDirective = getDirective(schema, fieldConfig, directiveName)?.[0] ?? typeDirectiveArgumentMaps[typeName]
            if (authDirective) {
              const { requires } = authDirective
              if (requires) {
                  const { resolve = defaultFieldResolver } = fieldConfig
                  fieldConfig.resolve = function (source, args, context, info) {
                  const user = getUserFn(context.headers.authToken)
                  if (!user.hasRole(requires)) {
                      throw new Error('not authorized')
                  }
                  return resolve(source, args, context, info)
                  }
                  return fieldConfig
              }
            }
        }
      })    
    }
}
    
const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective('auth', getUser)
  
let schema = makeExecutableSchema({
    typeDefs: [
      ...authDirectiveTypeDefs
    ]
})

export default schema = authDirectiveTransformer(schema)