// @flow
import express from 'express';

import type BaseAction from '~/actions/BaseAction';
import IndexAction from '~/actions/index/IndexAction';
import PostAction from '~/actions/index/PostAction';
import UserCreateAction from '~/actions/user/CreateAction';

import IndexResponder from '~/responders/index/IndexResponder';
import PostResponder from '~/responders/index/PostResponder';
import UserCreateResponder from '~/responders/user/CreateResponder';

const router = express.Router();
const indexAction = new IndexAction(new IndexResponder());
const postAction = new PostAction(new PostResponder());
const userCreateAction = new UserCreateAction(new UserCreateResponder());

const get = (url: string, action: BaseAction) => {
    router.get(url, action.execute);
};
const post = (url: string, action: BaseAction)  => {
    router.post(url, action.execute);
};

get('/', indexAction);
post('/post', postAction);
post('/users', userCreateAction);

export default router;
