import { mergeSchemas } from '@graphql-tools/schema';

import authSchema, {authDirectiveProvider} from './auth/schema'
import userSchema from './users/schema'
import productSchema from './products/schema'
import campaingsSchema from './campaingsSchemas/schema'
import campaingSchema from './campaings/schema'

export default async () => {
    return authDirectiveProvider(
        mergeSchemas({
            schemas:[
                authSchema,
                productSchema,
                userSchema,
                campaingsSchema,
                campaingSchema     
            ]
        })
    )
}