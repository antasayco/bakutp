import mongoose from 'mongoose'

const { Schema, model } = mongoose

const schema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true},
    properties: [
        {
            key: { type: String, required: true},
            value: { type: Schema.Types.Mixed}
        }
    ]
})

export default model('Campaings', schema)