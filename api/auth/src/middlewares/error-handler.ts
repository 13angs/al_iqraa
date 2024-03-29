import { Request, Response, NextFunction } from 'express';
// import { RequestValidationError } from '../errors/request-validation-error';
// import { DatabaseConnectionError } from '../errors/database-connection-error';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    // if (err instanceof RequestValidationError) {

    //     // const formattedErrors = err.errors.map((error) => {
    //     //     return { message: error.msg, field: error.param };
    //     // });

    //     return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    // }

    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    res.status(400).send({
        // return the error from throw new Error
        errors: [{ message: "Something went wrong" }]
    });
}