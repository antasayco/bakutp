import { makeExecutableSchema } from "@graphql-tools/schema"
import { authDirectiveTypeDefs } from '../auth/schema'
import userSchema from './schemas/user'

import userResolver from './resolver'
const schema = makeExecutableSchema({
    typeDefs: [
        ...authDirectiveTypeDefs,
        ...userSchema,
    ],
    resolvers: userResolver
})

export default schema