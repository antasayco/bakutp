import { stitchSchemas } from '@graphql-tools/stitch';

import authSchema from './auth/schema'

export default stitchSchemas({
    subschemas:[
        authSchema
    ],
})