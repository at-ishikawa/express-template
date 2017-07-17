// @flow
import BaseAction from "~/actions/BaseAction";
import { __ } from 'i18n';

export default class IndexAction extends BaseAction
{
    onDispatch(request: express$Request, response: express$Response) {
        response.send(__('Hello'));
    }
}
