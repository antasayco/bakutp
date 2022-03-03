export const MutationSignIn = `
    type Mutation {
        signIn(
            email: String!
            password: String!
        ): Token
    }
`
export const typeUserToken = `
    type Token {
        token: String!
    }
`

export default [
    MutationSignIn
]