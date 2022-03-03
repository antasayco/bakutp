import { IResolvers } from "@graphql-tools/utils"
import User from '../../../models/User'
import jwt from 'jsonwebtoken'
import { conf } from '../../../config'

const user: IResolvers = {
    Mutation:{
        signIn: async (_, {email, password}) => {
            try{
                const user = await User.findOne({email})
                if(user){
                    if(await user.matchPassword(password)){
                        const token  = jwt.sign(JSON.stringify(user), conf.vars.SECRET)
                        return {
                            token
                        }
                    }
                    else throw "Contraseña incorrecta" 
                }else{
                    throw "Usuario no encontrado"
                }   
            }catch(e){
                throw e
            }
        }
    }
}

export default user