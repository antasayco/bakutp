import mongoose from 'mongoose'

const { Schema, model } = mongoose

const schema = new Schema({
    id: { type: String, required: true, unique: true  },
    name: { type: String, required: true },
    stock: { type: mongoose.Schema.Types.Number, required: true}
})

export default model('Product', schema, "products")