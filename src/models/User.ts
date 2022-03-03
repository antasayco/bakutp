import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const { Schema, model } = mongoose

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resources: [
        {
            id:{ type: String, required: true},
            approved:{ type: Boolean, required: true}
        }
    ]
})

export const encryptPassword = async(pass:string) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pass, salt)
    return hash
}
schema.methods.matchPassword = async function(pass:string) {
    return await bcrypt.compare(pass, this.password)
}

export default model('User', schema)