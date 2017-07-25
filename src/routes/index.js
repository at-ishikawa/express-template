// @flow
import Router from './Router';
import IndexAction from '~/actions/index/IndexAction';
import PostAction from '~/actions/index/PostAction';
import UserCreateAction from '~/actions/users/CreateAction';

export default () => {
    const router = new Router();

    router.get('/', IndexAction);
    router.post('/post', PostAction);
    router.post('/users', UserCreateAction);

    return router.expressRouter;
};
