import { IResolvers } from "@graphql-tools/utils"
import Product from "../../../models/Product"

const users: IResolvers = {
    Query:{
        products: async () => {
            const products = await Product.find()
            return products
        }
    }
}

export default users
