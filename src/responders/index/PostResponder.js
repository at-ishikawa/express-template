// @flow
import BaseResponder from "~/responders/BaseResponder";
import log4js from "log4js";
import type ResponsePayload from "~/responders/ResponsePayload";

export default class PostResponder extends BaseResponder
{
    respond(payload: ResponsePayload)
    {
        log4js.getLogger().info(payload);
        this.response.status(payload.status)
            .send(payload.data);
    }
}
