// @flow
import Router from './Router';
import IndexAction from '~/actions/index/IndexAction';
import PostAction from '~/actions/index/PostAction';
import UserCreateAction from '~/actions/users/CreateAction';
import UserIndexAction from '~/actions/users/IndexAction';

export default () => {
    const router = new Router();

    router.get('/', IndexAction);
    router.post('/post', PostAction);
    router.post('/users', UserCreateAction);

    const authRouter = new Router();
    authRouter.use((request, response, next) => {
        // authenticate
        next();
    });
    authRouter.get('/users/:id', UserIndexAction);

    router.use(authRouter.expressRouter);
    return router.expressRouter;
};
