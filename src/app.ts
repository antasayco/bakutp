import express from 'express'
import checkVars from './helpers/checkVars'
import { graphqlHTTP } from 'express-graphql'
import jwt from 'express-jwt'
import schema from './graphql'
import cors from 'cors'
import getUser from './graphql/auth/getUser'

checkVars();
const app = express();

app.use(cors());

app.use('/',graphqlHTTP({
    graphiql: true,
    schema,
    context: ({ req }) => {
        const token = req.headers.authorization || '';
     
        const user = getUser(token);
     
        return { user };
    },
}));

export default app
