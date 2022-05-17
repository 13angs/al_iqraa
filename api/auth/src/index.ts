// steps
// init the tsconfig
// tsc --init

import mongoose from 'mongoose';
import { app } from './app';
// connecto to mongo db
const start = async () => {
    const jwt_key = process.env.JWT_KEY || 'lskdjfks';
    if (!jwt_key) {
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
