export const QueryUser = `
    type Query{
        products:[Product] 
        product (id: ID!): Product
    }
`
export const typeUser = `
    type Product {
        id: ID,
        name: String,
        stock: Int
    }
`

export const MutationUser = `
    type Mutation{
        addProduct(product: ProductInput): Product
        addSale(id: ID!, qty: Int!): Product
    }
`

export const inputUser = `
    input ProductInput{
        id: ID!,
        name: String!,
        stock: Int!
    }
`

export default [
    QueryUser,
    typeUser,
    MutationUser,
    inputUser
]