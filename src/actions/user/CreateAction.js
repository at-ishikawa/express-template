// @flow
import BaseAction from "~/actions/BaseAction";

import ContainerHolder from '~/containers/ContainerHolder';
import {getConnection} from "typeorm";
import { User } from '~/entities/user';
import DomainUser from '~/domains/user';
import ResponsePayload from "~/responders/ResponsePayload";

export default class CreateAction extends BaseAction
{
    async onDispatch()
    {
        let user = ContainerHolder.getContainer().get(User);
        user.email = 'example@example.com';
        user.password = 'password';

        let userRepository = getConnection().getRepository(User);
        user = await userRepository.persist(user);
        let domainUser = new DomainUser();
        domainUser.setFields(user);

        return new ResponsePayload(domainUser);
    }
}
