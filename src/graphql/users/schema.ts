import { join } from 'path'
import { makeExecutableSchema } from "@graphql-tools/schema"
import { loadFilesSync } from "@graphql-tools/load-files"
import { usersResolvers } from './resolver'

const schema = makeExecutableSchema({
    typeDefs: loadFilesSync(join(__dirname,"./**/*.gql")),
    resolvers: usersResolvers
})

export default schema