import express from 'express'
import checkVars from './helpers/checkVars'
import { graphqlHTTP } from 'express-graphql'
import jwt from 'express-jwt'
import getSchema from './graphql'
import cors from 'cors'
import getUser from './graphql/auth/getUser'

const start = async () =>{
    checkVars();
    const app = express();

    app.use(cors());
    
    app.use('/',graphqlHTTP({
        graphiql: true,
        schema: await getSchema(),
        context: ({ req }) => {
            const token = req.headers.authorization || '';
        
            const user = getUser(token);
        
            return { user };
        },
    }));
    return app
}

export default start
