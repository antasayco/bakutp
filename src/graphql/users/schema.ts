import { makeExecutableSchema } from "@graphql-tools/schema"
import { authDirectiveTypeDefs } from '../auth/schema'
import userSchema from './schemas/user'
import rolesSchema from './schemas/roles'
import campaingSchema from './schemas/roles'

import userResolver from './resolver'
const schema = makeExecutableSchema({
    typeDefs: [
        ...authDirectiveTypeDefs,
        ...rolesSchema,
        ...campaingSchema,
        ...userSchema,
    ],
    resolvers: userResolver
})

export default schema