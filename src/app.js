// @flow
import express from 'express';
import applyMiddleware from '~/middlewares';
import ContainerHolder from "~/containers/ContainerHolder";

const app = express();
ContainerHolder.bindDefault();
applyMiddleware(app);

export default app;
