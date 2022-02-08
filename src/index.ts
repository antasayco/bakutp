require('dotenv').config()

import app from './app';
import { conf } from './config';
import './database'

const {PORT} = conf.vars

app.listen(PORT, () => {
  console.log(`Server on port ${PORT} \n Graphql IDE: http://localhost:${PORT}/graphql`);
});