export const directive = `
    directive @auth(
        allowed: [AuthResources!]!,
    ) on OBJECT | FIELD_DEFINITION

    enum AuthResources {
        ADMIN
        READ_USER
        CREATE_USER
        DELETE_USER
        UPDATE_USER
    }
`