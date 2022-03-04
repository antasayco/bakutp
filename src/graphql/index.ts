import { mergeSchemas } from '@graphql-tools/schema';

import authSchema, {authDirectiveProvider} from './auth/schema'
import userSchema from './users/schema'
import campaingsSchema from './campaingsSchemas/schema'
import getCampaingSchema from './campaings/schema'

export default async () => {

    const campaingSchema = await getCampaingSchema()

    return authDirectiveProvider(
        mergeSchemas({
            schemas:[
                authSchema,
                userSchema,
                campaingsSchema,
                campaingSchema     
            ]
        })
    )
}