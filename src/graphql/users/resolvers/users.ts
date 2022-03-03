import { IResolvers } from "@graphql-tools/utils"

const users: IResolvers = {
    Query:{
        users: (data) => {
            console.log(data)
            return [
                {
                    firstName: "Juan",
                    lastName: "Diego"
                },
                {
                    firstName: "Edu",
                    lastName: "Samsung"
                }
            ]
        }
    }
}

export default users
