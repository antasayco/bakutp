import { makeExecutableSchema } from "@graphql-tools/schema"
import { authDirectiveTypeDefs } from '../auth/schema'
import CampaingsTypeDefs from './schemas/campaing'
import campaingResolver from './resolver'

export default makeExecutableSchema({
    typeDefs: [
        ...authDirectiveTypeDefs,
        ...CampaingsTypeDefs
    ],
    resolvers: campaingResolver
})