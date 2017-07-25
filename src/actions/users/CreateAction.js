// @flow
import BaseAction from "~/actions/BaseAction";

import ResponsePayload from "~/responders/ResponsePayload";
import UserRepository from "~/repositories/db/UserRepository";
import DomainUserFactory from "~/domains/users/DomainUserFactory";
import CreateResponder from "~/responders/users/CreateResponder";
import {inject} from "inversify";

export default class CreateAction extends BaseAction
{
    @inject(CreateResponder)
    responder: CreateResponder = new CreateResponder();

    @inject(DomainUserFactory)
    domainUserFactory: DomainUserFactory = new DomainUserFactory();

    @inject(UserRepository)
    userRepository: UserRepository = new UserRepository();

    async onDispatch()
    {
        let input = this.domainUserFactory.create({
            email: 'example@example.com',
            password: 'password'
        });
        const user = await this.userRepository.create(input);
        return new ResponsePayload(user);
    }
}
