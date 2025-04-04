declare class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    constructor(message: string, statusCode: number, isOperational?: boolean);
    /**
     * Creates an HTTP-specific error using `http-errors` library
     * while allowing for custom messages.
     */
    static httpError(statusCode: number, message?: string): AppError;
}
export { AppError };
