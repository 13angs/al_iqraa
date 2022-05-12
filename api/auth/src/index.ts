// steps
// init the tsconfig
// tsc --init

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
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

// connecto to mongo db
const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
    }

    try {
        // AL_IQRAA_AUTH_DB
        const collectionName = process.env.COLLECTION_NAME;
        const databaseDomain = process.env.DATABASE_DOMAIN;
        const databasePort = process.env.DATABASE_PORT;

        await mongoose.connect(`mongodb://${databaseDomain}:${databasePort}/${collectionName}`)
        console.log('connected to mongodb')
    } catch (err) {
        console.error(err);
    }

    app.listen(5003, () => {
        console.log("Listening to port 5003!!!")
    })
}

start();
