require('dotenv').config()

import connect from './database'
import start from './app';
import { conf } from './config';

(async () => {
  await connect()
  const app = await start() 
  
  const {PORT} = conf.vars
  app.listen(PORT, () => {
    console.log(`Server on port ${PORT} \n Graphql IDE: http://localhost:${PORT}`);
  })
})()