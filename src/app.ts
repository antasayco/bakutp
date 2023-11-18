import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import jwt from 'express-jwt'
import getSchema from './graphql'
import cors from 'cors'
import getUser from './graphql/auth/getUser'

const start = async () =>{
    const app = express();

    app.use(cors());
    
    app.use('/',graphqlHTTP({
        graphiql: true,
        schema: await getSchema(),
        context: ({ req }) => {
            const token = req.headers.authorization || '';
        
            const user = getUser(token);
            console.log("Context", user)
            return { user };
        },
    }));
    return app
}

export default start
