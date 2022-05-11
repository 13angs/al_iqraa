import mongoose from "mongoose";

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
    email: string;
    password: string;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

// An interface that describe the document
// that the user has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}


// const buildUser = (attrs: UserAttrs) => {
//     return new User(attrs);
// }

// merge builUser into/built into User
const User = mongoose.model<UserDoc, UserModel>('IQ_USERS', userSchema);

export { User };