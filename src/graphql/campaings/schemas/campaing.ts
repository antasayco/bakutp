export const QueryCampaings = `
    type Query {
        campaingsData: [CampaingData]
        campaingData(id: ID! properties:[String]): [[Propertie]]
    }
`
export const typeCampaing = `
    type CampaingData {
        name: String,
        properties: [Propertie]
    }
`

export const typeProperties = `
    type Propertie {
        key: String
        value: String
    }
`

export default [
    QueryCampaings,
    typeProperties,
    typeCampaing
]