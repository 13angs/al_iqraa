// steps
// init the tsconfig
// tsc --init

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);


// if using async
// need to throw the error in next(new Error());
// else
// use the express-async-errors package
// to handle the errors
app.all("*", async () => {
    throw new NotFoundError();
})


// register the error handlers here
app.use(errorHandler);

app.listen(5003, () => {
    console.log("Listening to port 5003!!!")
})
