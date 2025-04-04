import createHttpError from 'http-errors';
declare class HttpException extends Error {
    status: number;
    constructor(status: number, message: string);
    sendHttpError(): createHttpError.HttpError<number>;
}
export { HttpException };
