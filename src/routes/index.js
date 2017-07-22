// @flow
import Router from './Router';
import IndexAction from '~/actions/index/IndexAction';
import PostAction from '~/actions/index/PostAction';
import UserCreateAction from '~/actions/user/CreateAction';
import IndexResponder from '~/responders/index/IndexResponder';
import PostResponder from '~/responders/index/PostResponder';
import UserCreateResponder from '~/responders/user/CreateResponder';

const router = new Router();

router.get('/', new IndexAction(new IndexResponder()));
router.post('/post', new PostAction(new PostResponder()));
router.post('/users', new UserCreateAction(new UserCreateResponder()));

export default router;
