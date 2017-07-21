// @flow
import BaseResponder from "~/responders/BaseResponder";
import type ResponsePayload from "~/responders/ResponsePayload";

export default class CreateResponder extends BaseResponder
{
    respond(payload: ResponsePayload)
    {
        this.response.send(payload.data);
    }
}
