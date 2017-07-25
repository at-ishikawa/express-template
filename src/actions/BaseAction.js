// @flow
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import IllegalInvocationError from '~/exceptions/IllegalInvocationError';
import Autobind from 'autobind-decorator';
import log4js from "log4js";
import BaseResponder from '~/responders/BaseResponder';
import {injectable} from "inversify";

@injectable()
export default class BaseAction
{
    responder: $Subtype<BaseResponder> = new BaseResponder();

    @Autobind
    execute(request: express$Request, response: express$Response)
    {
        const result = this.onDispatch(request);

        const responder = this.responder;
        responder.response = response;
        if (result instanceof Promise) {
            result.then(payload => {
                responder.respond(payload);
            }).catch(error => {
                log4js.getLogger()
                    .error(error);
                response.status(500)
                    .send(error);
            });
            return;
        }
        responder.respond(result);
    }

    onDispatch(request: express$Request)
    {
        throw new IllegalInvocationError('method dispatch is not defined');
    }
}
