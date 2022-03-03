export const typeRole = `
    type Role {
        name: String
        resources: [Resource]
    }
`
export const typeResource = `
    type Resource {
        id: ID,
        approved: Boolean
    }
`

export default [
    typeResource,
    typeRole
]