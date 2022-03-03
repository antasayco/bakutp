import { makeExecutableSchema } from "@graphql-tools/schema"
import { authDirectiveTypeDefs } from '../auth/schema'
import CampaingsSchema from './schemas/campaing'

import campaingResolver from './resolver'
const schema = makeExecutableSchema({
    typeDefs: [
        ...authDirectiveTypeDefs,
        ...CampaingsSchema
    ],
    resolvers: campaingResolver
})

export default schema