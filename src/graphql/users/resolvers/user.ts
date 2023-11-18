import { IResolvers } from "@graphql-tools/utils"
import User, { encryptPassword } from '../../../models/User'
import {UserType} from '../../../types/user'
import jwt from 'jsonwebtoken'

const user: IResolvers = {
    Query:{
        user: async (_,{email, token}) => {
            const user = !token ? await User.findOne({email}) : jwt.decode(token)
            console.log({email, token}, user)
            return user
        }
    },
    Mutation:{
        addUser: async (_,{user}) => {
            user.resources
            const newUser:UserType = new User(user)
            newUser.password = await encryptPassword(newUser.password)
            await newUser.save();
            return newUser
        }
    }
}

export default user