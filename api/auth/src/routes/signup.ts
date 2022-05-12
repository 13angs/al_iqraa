import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { User } from '../models/users';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../errors/bad-request-error';
// import { DatabaseConnectionError } from '../errors/database-connection-error';

const router = express.Router();

router.post('/api/v1/auth/signup', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be between 4 and 20 characters')
], async (req: Request, res: Response) => {
    // validate the errors
    const errors = validationResult(req);

    // need to setup a consistent structure
    // to handle invalid data
    if (!errors.isEmpty()) {
        // res.status(400).send(errors);
        // the ability to handle the errors
        // const error = new Error("Invalid email or password");
        // error.reasons = errors.array();
        // throw error;
        throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    // if not null
    if (existingUser) {
        throw new BadRequestError('Email in use');
    }

    // else create new user
    const user = User.build({
        email,
        password
    });

    await user.save();

    // generate JWT
    const userJWT = jwt.sign({
        id: user.id,
        email: user.email
    },
        process.env.JWT_KEY!
    );

    // store jwt in session
    // use object to avoid error
    req.session = {
        jwt: userJWT
    }

    res.status(201).send(user);
});

export { router as signupRouter };