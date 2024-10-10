import express from 'express';
import cors from 'cors';

import routes from './routes/routes.js';

import {logErrors, errorHandler, boomErrorHandler} from './middlewares/error.handler.js';


const app = express();
app.use(express.json());

const whiteList = ['http://localhost:3000'];
const options = {
  origin: (origin, callback)=> {
    if(whiteList.includes(origin)||!origin){
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(options));

const port = process.env.PORT || 3000;

routes(app);

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
