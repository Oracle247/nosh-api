import { Logger } from 'winston';
declare const logger: Logger;
declare const stream: {
    write: (message: string) => void;
};
export { logger, stream };
