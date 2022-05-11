export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    // method signature not a real method
    abstract serializeErrors(): { message: string; field?: string; }[];
}