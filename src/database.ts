import mongoose from 'mongoose'
import { conf } from './config'

(async () => {
    try {
        const db = await mongoose.connect(conf.vars.DATABASE_URL, {})
        console.log(`Mongodb is connected to ${db.connection.host}`)
    } catch (err) {
      console.log('error: ' + err)
    }
})()