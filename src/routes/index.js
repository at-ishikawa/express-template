// @flow
import express from 'express';

import { Container } from 'inversify';
import { User } from '~/entities/user';
const container = new Container();
container.bind(User).toSelf();

import BaseAction from '~/actions/BaseAction';
import IndexAction from '~/actions/index/IndexAction';
import PostAction from '~/actions/index/PostAction';
import UserCreateAction from '~/actions/user/CreateAction';

const router = express.Router();
const indexAction = new IndexAction();
const postAction = new PostAction();
const userCreateAction = new UserCreateAction();

const get = (url: string, action: BaseAction) => {
    router.get(url, action.onDispatch);
};
const post = (url: string, action: BaseAction)  => {
    router.post(url, action.onDispatch);
};

get('/', indexAction);
post('/post', postAction);
post('/users', userCreateAction);

export default router;
