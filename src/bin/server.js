#! /usr/bin/env node

import "babel-polyfill";

import app from "../app";
import { createConnection } from 'typeorm';
import log4js from "log4js";
import sourceMapSupport from "source-map-support";

sourceMapSupport.install();
const logger = log4js.getLogger();

createConnection().then(async (connection) => {
    try {
        app().listen(3000, () => logger.info('Started an express'));
    } finally {
        await connection.close();
    }
}).catch(e => logger.error(e));
