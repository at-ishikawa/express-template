// @flow
import BaseAction from "~/actions/BaseAction";
import { __ } from 'i18n';
import ResponsePayload from "~/responders/ResponsePayload";
import IndexResponder from "~/responders/index/IndexResponder";
import {inject} from "inversify";

export default class IndexAction extends BaseAction
{
    @inject(IndexResponder)
    responder: IndexResponder = new IndexResponder();

    onDispatch()
    {
        return new ResponsePayload(__('Hello'));
    }
}
