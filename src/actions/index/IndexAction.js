// @flow
import BaseAction from "~/actions/BaseAction";
import { __ } from 'i18n';
import ResponsePayload from "~/responders/ResponsePayload";
import type IndexResponder from "~/responders/index/IndexResponder";

export default class IndexAction extends BaseAction
{
    constructor(responder: IndexResponder)
    {
        super(responder);
    }

    onDispatch()
    {
        return new ResponsePayload(__('Hello'));
    }
}
