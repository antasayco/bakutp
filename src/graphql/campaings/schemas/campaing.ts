export const QueryCampaings = `
    type Query {
        campaings: [Campaing]
        campaing(id: ID!): Campaing
    }
`

export const MutationCampaings = `
    type Mutation {
        addCampaing(campaing: CampaingInput): Campaing
    }
`
export const CampaingInput = `
    input CampaingInput {
        id: ID!
        name: String!
        slug: String!
    }
`

export const typeCampaing = `
    type Campaing {
        id: ID
        name: String
        slug: String
    }
`

export default [
    QueryCampaings,
    typeCampaing,
    MutationCampaings,
    CampaingInput
]