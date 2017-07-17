import "babel-polyfill";

import express from 'express';
import bodyParser from 'body-parser';
import config from 'config';
import expressValidator from 'express-validator';
import i18n from 'i18n';
import log4js from 'log4js';

import routes from './routes/index';

export default () => {
    const app = express();
    log4js.configure(config.get('log'));
    const logger = log4js.getLogger();

    logger.debug('Log4js hello world');

    i18n.configure({
        "locales": ["en"],
        "defaultLocale": "en",
        "directory": __dirname + "/messages"
    });

    app.use(bodyParser.json());
    app.use(expressValidator());
    app.use(log4js.connectLogger(logger, {
        level: 'info'
    }));
    app.use(i18n.init);

    app.use('/', routes);

// After routing
    app.use((error, request, response) => {
        logger.error(error);
        response.status(500);
        response.send("ERROR");
    });

    return app;
};
