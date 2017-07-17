// @flow
import BaseAction from "~/actions/BaseAction";

import {getConnection} from "typeorm";
import { User } from '~/entities/user';
import DomainUser from '~/domains/user';

export default class CreateAction extends BaseAction
{
    async onDispatch(request: express$Request, response: express$Response)
    {
        // const container = new Container();
        // let user = container.get(User);
        let user = new User();
        user.email = 'example@example.com';
        user.password = 'password';

        let userRepository = getConnection().getRepository(User);
        user = await userRepository.persist(user);
        let domainUser = new DomainUser();
        domainUser.setFields(user);

        response.send(domainUser);
    }
}
