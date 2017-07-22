// @flow
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import ContainerHolder from "~/containers/ContainerHolder";
import IllegalInvocationError from '~/exceptions/IllegalInvocationError';
import Autobind from 'autobind-decorator';
import log4js from "log4js";
import type BaseResponder from '~/responders/BaseResponder';

export default class BaseAction
{
    responder: BaseResponder;
    container: any;

    constructor(responder: BaseResponder)
    {
        this.responder = responder;
        this.container = ContainerHolder.getContainer();
    }

    @Autobind
    execute(request: express$Request, response: express$Response)
    {
        const result = this.onDispatch(request);

        this.responder.response = response;
        if (result instanceof Promise) {
            result.then(payload => {
                this.responder.respond(payload);
            }).catch(error => {
                log4js.getLogger()
                    .error(error);
                response.status(500)
                    .send(error);
            });
            return;
        }
        this.responder.respond(result);
    }

    onDispatch(request: express$Request)
    {
        throw new IllegalInvocationError('method dispatch is not defined');
    }
}
