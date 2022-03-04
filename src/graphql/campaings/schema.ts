import { makeExecutableSchema } from "@graphql-tools/schema"
import { authDirectiveTypeDefs } from '../auth/schema'
import getCampaingTypeDefs from './schemas/campaing'
import campaingResolver from './resolver'

export default async () => {
    const CampaingsTypeDefs = await getCampaingTypeDefs()
    return makeExecutableSchema({
        typeDefs: [
            ...authDirectiveTypeDefs,
            ...CampaingsTypeDefs
        ],
        resolvers: campaingResolver
    })
}