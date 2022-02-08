import {makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers';
const { loadFile,  } = require('graphql-import-files')

export default makeExecutableSchema({
    typeDefs: loadFile('./src/types/typeDefs.gql'),
    resolvers
})