import { GraphQLSchema } from "graphql";

export interface AuthDirective {
    (directiveName: string , getUserFn: GetUserFn): {
        authDirectiveTypeDefs: string | string[],
        authDirectiveProvider: (schema:GraphQLSchema) => GraphQLSchema
    }
}

export interface GetUserFn {
    ( token: string ): {
        hasResource: ( resources: string[] ) => boolean
    }
}