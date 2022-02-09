import { stitchSchemas } from '@graphql-tools/stitch';

import authSchema from './auth/schema'
import userSchema from './users/schema'

export default stitchSchemas({
    subschemas:[
        authSchema,
        userSchema
    ],
})