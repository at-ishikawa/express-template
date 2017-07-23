// @flow
import BaseAction from "~/actions/BaseAction";

import ResponsePayload from "~/responders/ResponsePayload";
import UserRepository from "~/repositories/db/UserRepository";
import DomainUserFactory from "~/domains/users/DomainUserFactory";

export default class CreateAction extends BaseAction
{
    async onDispatch()
    {
        let input = this.container.get(DomainUserFactory)
            .create({
                email: 'example@example.com',
                password: 'password'
            });
        const user = await this.container.get(UserRepository)
            .create(input);
        return new ResponsePayload(user);
    }
}
