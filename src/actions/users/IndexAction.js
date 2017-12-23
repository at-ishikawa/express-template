// @flow
import BaseAction from "~/actions/BaseAction";

import ResponsePayload from "~/responders/ResponsePayload";
import UserRepository from "~/repositories/db/UserRepository";
import IndexResponder from "~/responders/users/IndexResponder";
import {inject} from "inversify";

export default class IndexAction extends BaseAction
{
    @inject(IndexResponder)
    responder: IndexResponder = new IndexResponder();

    @inject(UserRepository)
    userRepository: UserRepository = new UserRepository();

    onDispatch(request : express$Request)
    {
        const user = this.userRepository.findById(request.params.id);
        return new ResponsePayload(user);
    }
}
