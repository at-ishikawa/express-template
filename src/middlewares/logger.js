// @flow
import config from 'config';
import log4js from 'log4js';

log4js.configure(config.get('log'));
const logger = log4js.getLogger();
export default log4js.connectLogger(logger, {
    level: 'info'
});
