import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils'
import { GraphQLSchema, defaultFieldResolver } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { directive } from './schemas/directive'

import { AuthDirective} from '../../types/auth'
import getUser from './getUser'
import siginTypeDefs, { typeUserToken } from './schemas/auth'
import { typeResource } from '../users/schemas/roles'
import resolvers from './resolver'

const authDirective:AuthDirective = ( directiveName, getUserFn ) => {
    const typeDirectiveArgumentMaps: Record<string, any> = {}
    return {
      authDirectiveTypeDefs: [directive],
      authDirectiveProvider: (schema: GraphQLSchema) => {
        return mapSchema(schema, {
          [MapperKind.TYPE]: type => {
            const authDirective = getDirective(schema, type, directiveName)?.[0]
            if (authDirective) typeDirectiveArgumentMaps[type.name] = authDirective
            return undefined
          },
          [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
            const authDirective = getDirective(schema, fieldConfig, directiveName)?.[0] ?? typeDirectiveArgumentMaps[typeName]
            if (authDirective) {
                const { allowed } = authDirective
                if (allowed) {
                    const { resolve = defaultFieldResolver } = fieldConfig
                    fieldConfig.resolve = function (source, args, context, info) {
                    const user = getUserFn(context.user)
                    if (!user.hasResource(allowed)) {
                        throw new Error('Not authorized')
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
}
    
export const { authDirectiveTypeDefs, authDirectiveProvider } = authDirective('auth', getUser)

let schema = makeExecutableSchema({
    typeDefs: [
      ...authDirectiveTypeDefs,
      ...siginTypeDefs,
      typeUserToken,
      typeResource
    ],
    resolvers: resolvers
})

export default schema = authDirectiveProvider(schema)