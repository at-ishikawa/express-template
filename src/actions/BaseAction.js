// @flow
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import IllegalInvocationError from '~/exceptions/IllegalInvocationError';

export default class BaseAction
{
    onDispatch(request: express$Request, response: express$Response)
    {
        throw new IllegalInvocationError('method dispatch is not defined');
    }
}
