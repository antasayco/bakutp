import express from 'express'
import checkVars from './helpers/checkVars'
import {graphqlHTTP} from 'express-graphql'
import schema from './schema'

checkVars();
const app = express();


app.use('/graphql',graphqlHTTP({
    graphiql: true,
    schema
}))

export default app
