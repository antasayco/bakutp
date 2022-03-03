type Resource = {
    id: string,
    approved: boolean
}
export interface UserType{
    name: string,
    lastName: string,
    email: string,
    password?: string,
    resources: Resource[],
    save: ()=>{}
}