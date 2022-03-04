export const QueryCampaings = `
    type Query {
        campaings: [Campaing]
        campaing(id: ID! properties:[String]): Campaing
    }
`

export const MutationCampaings = `
    type Mutation {
        addCampaing(campaing: CampaingInput!): Campaing
        updateCampaing(id: ID! newCampaing: CampaingInput!): Campaing
    }
`
export const CampaingInput = `
    input CampaingInput {
        id: ID!
        name: String!
        slug: String!
        properties: [PropertieInput]
    }
`

export const typeCampaing = `
    type Campaing {
        id: ID
        name: String
        slug: String
        properties: [Propertie]
    }
`

export const typeProperties = `
    type Propertie {
        key: String
        value: String
    }
    input PropertieInput{
        key: String!
        value: String
    }
`

export default [
    QueryCampaings,
    typeCampaing,
    MutationCampaings,
    CampaingInput,
    typeProperties
]