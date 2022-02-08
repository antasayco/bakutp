import { GraphQLSchema } from "graphql";

export interface AuthDirective {
    (directiveName: string , getUserFn: GetUserFn): {
        authDirectiveTypeDefs: string,
        authDirectiveTransformer: (schema:GraphQLSchema) => GraphQLSchema
    }
}

export interface GetUserFn {
    ( token: string ): {
        hasRole: ( role: string ) => boolean
    }
}