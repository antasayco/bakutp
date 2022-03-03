import { IResolvers } from "@graphql-tools/utils"
import User, { encryptPassword } from '../../../models/User'
import {UserType} from '../../../types/user'

const user: IResolvers = {
    Query:{
        user: async (_,{email}) => {
            const user = await User.findOne({email})
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