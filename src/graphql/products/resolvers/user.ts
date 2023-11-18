import { IResolvers } from "@graphql-tools/utils"
import Product from '../../../models/Product'
import {UserType} from '../../../types/user'

const user: IResolvers = {
    Query:{
        product: async (_,{ id }) => {
            const user = await Product.findOne({id})
            return user
        }
    },
    Mutation:{
        addProduct: async (_,{ product }) => {
            const newUser:UserType = new Product(product)
            await newUser.save();
            return newUser
        },
        addSale: async (_,{ id, qty }) => {
            // Buscar el producto por su ID
            const product = await Product.findOne({ id });

            // Verificar si el producto existe
            if (!product) {
                throw new Error('Producto no encontrado');
            }

            // Verificar si hay suficiente stock para la venta
            if (product.stock < qty) {
                throw new Error('Stock insuficiente para la venta');
            }

            // Restar la cantidad especificada del stock del producto
            product.stock -= qty;

            // Guardar los cambios en la base de datos
            await product.save();

            return product;
        }
    }
}

export default user