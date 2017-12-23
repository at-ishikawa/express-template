// @flow
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import log4js from 'log4js';
import ExtendedError from "../exceptions/ExtendedError";

export default (error: ?Error, request: express$Request, response: express$Response, next: express$NextFunction) => {
    const isLogging = !(error instanceof ExtendedError) ||
        (error instanceof ExtendedError && error.isMonitored());
    if (isLogging) {
        const logger = log4js.getLogger();
        logger.error(error);
    }

    response.status(500);
    response.send(error.message);
};
