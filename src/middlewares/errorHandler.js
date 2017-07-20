// @flow
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import log4js from 'log4js';

export default (error: ?Error, request: express$Request, response: express$Response, next: express$NextFunction) => {
    const logger = log4js.getLogger();
    logger.error(error);
    response.status(500);
    response.send("ERROR");
};
