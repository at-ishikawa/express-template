// @flow
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import IllegalInvocationError from '~/exceptions/IllegalInvocationError';
import type ResponsePayload from "./ResponsePayload";
import {injectable} from "inversify";

@injectable()
export default class BaseResponder
{
    _response: express$Response;

    set response(response: express$Response)
    {
        this._response = response;
    }

    get response(): express$Response
    {
        return this._response;
    }

    /**
     *
     * @param payload ResponsePayload
     */
    respond(payload: ResponsePayload)
    {
        throw new IllegalInvocationError('Method is not overrided.');
    }
}
