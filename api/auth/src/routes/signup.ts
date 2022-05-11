import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

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

    // const { email, password } = req.body;
    console.log("Creating a user...");
    // throw new Error("Error connecting to database");
    throw new DatabaseConnectionError();

    res.send({});
});

export { router as signupRouter };