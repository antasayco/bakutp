import { mergeSchemas } from '@graphql-tools/schema';

import authSchema, {authDirectiveProvider} from './auth/schema'
import userSchema from './users/schema'
import campaingsSchema from './campaings/schema'

export default authDirectiveProvider(
    mergeSchemas({
        schemas:[
            authSchema,
            userSchema,
            campaingsSchema
        ]
    })
)