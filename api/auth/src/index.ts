// steps
// init the tsconfig
// tsc --init

import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.listen(5003, () => {
    console.log("Listening to port 5003")
})
