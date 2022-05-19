import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { existEmailRouter } from './routes/exist-email';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(cors());
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false
    })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(existEmailRouter);

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

export { app };