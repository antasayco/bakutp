import mongoose from 'mongoose'

const { Schema, model } = mongoose

const schema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true}
})

export default model('Campaings', schema)