export const QueryUser = `
    type Query{
        users:[User] 
        user (email: String, token: String): User
    }
`
export const typeUser = `
    type User {
        firstName: String,
        lastName: String,
        email: String,
        resources: [Resource]
    }
`

export const MutationUser = `
    type Mutation{
        addUser(user: UserInput): User
    }
`

export const inputUser = `
    input UserInput{
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        resources: [ResourceInput!]
    }

    input ResourceInput{
        id: ID!,
        approved: Boolean!
    }
`

export default [
    QueryUser,
    typeUser,
    MutationUser,
    inputUser
]