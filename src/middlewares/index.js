// @flow
import "babel-polyfill";

import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import i18nMiddleware from './i18n';
import logger from './logger';
import errorHandler from './errorHandler';

import router from '~/routes';

const apply = (app: express$Application) => {
    app.use(bodyParser.json());
    app.use(expressValidator());
    app.use(logger);
    app.use(i18nMiddleware);
    app.use('/', router.expressRouter);

    // After routing
    app.use(errorHandler);
};
export default apply;
