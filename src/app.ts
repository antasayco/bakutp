import express from 'express'
import checkVars from './helpers/checkVars'
import { graphqlHTTP } from 'express-graphql'

import schema from './graphql/index'

checkVars();
const app = express();
app.use('/',graphqlHTTP({
    graphiql: true,
    schema
}));

export default app
