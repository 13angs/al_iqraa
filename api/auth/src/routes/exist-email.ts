import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-requests';
import { Request, Response } from 'express';
import { User } from '../models/users';
import { BadRequestError } from '../errors/bad-request-error';

const router = express.Router();

router.post('/api/v1/auth/existemail',
    [
        body('email')
            .isEmail()
            .withMessage('Email must be valid')
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { email } = req.body;

        const existEmail = await User.findOne({ email });
        if (!existEmail) {
            // email not exist
            console.log(existEmail);
            res.status(200).send({});
        }


        throw new BadRequestError("Email already exist!");
    }
);

export { router as existEmailRouter }