import mongoose from 'mongoose'
import { campaingsDB } from '../database'

const { Schema, model } = mongoose 

export default model('Campaings', new Schema(), null, {connection:campaingsDB})