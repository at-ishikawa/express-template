#! /usr/bin/env node

import "babel-polyfill";

import app from "../app";
import { createConnection } from 'typeorm';

createConnection().then(async () => {
    app.listen(3000);
}).catch(null);
