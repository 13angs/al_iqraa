import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { Password } from '../services/password';
import { User } from '../models/users';
import { validateRequest } from '../middlewares/validate-requests';
import { BadRequestError } from '../errors/bad-request-error';

const router = express.Router();

router.post('/api/v1/auth/signin',
    [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('You must supply a password')
    ],
    validateRequest,
    async (req: Request, res: Response) => {

        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new BadRequestError('Invalid Credentials')
        }

        const passMatch = await Password.compare(
            existingUser.password,
            password
        );
        if (!passMatch) {
            throw new BadRequestError('Invalid Credentials');
        }

        // generate JWT
        const userJWT = jwt.sign(
            {
                id: existingUser.id,
                email: existingUser.email
            },
            process.env.JWT_KEY!
        );

        // save in cookie
        req.session = {
            jwt: userJWT
        }

        res.status(200).send(existingUser);
    });

export { router as signinRouter }