// @flow
import BaseAction from "~/actions/BaseAction";

import ContainerHolder from '~/containers/ContainerHolder';
import {getConnection} from "typeorm";
import User from '~/entities/User';
import ResponsePayload from "~/responders/ResponsePayload";
import DomainUserFactory from "../../domains/DomainUserFactory";
import EntityUserFactory from "../../entities/EntityUserFactory";

export default class CreateAction extends BaseAction
{
    async onDispatch()
    {
        const container = ContainerHolder.getContainer();
        let inputUser = container.get(DomainUserFactory).create({
            email: 'example@example.com',
            password: 'password'
        });

        let entityUser = container.get(EntityUserFactory).create(inputUser);
        let userRepository = getConnection().getRepository(User);
        await userRepository.persist(entityUser);
        let domainUser = container.get(DomainUserFactory).create(entityUser);
        return new ResponsePayload(domainUser);
    }
}
