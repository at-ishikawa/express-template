// @flow
import express from 'express';
import applyMiddleware from '~/middlewares';
import ContainerHolder from "~/containers/ContainerHolder";

export default () => {

    const app = express();
    ContainerHolder.bindDefault();
    applyMiddleware(app);

    return app;
}
