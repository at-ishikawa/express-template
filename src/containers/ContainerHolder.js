import IllegalInvocationError from '~/exceptions/IllegalInvocationError';

import { Container } from 'inversify';
import { User } from '~/entities/user';

export default class ContainerHolder
{
    static instance = null;

    container = new Container();

    constructor()
    {
        throw new IllegalInvocationError('ContainerHolder cannot be called constructor');
    }

    bindForDefault()
    {
        this.container.bind(User).toSelf();
    }

    static getContainer()
    {
        if (ContainerHolder.instance === null) {
            ContainerHolder.instance = new ContainerHolder();
            ContainerHolder.instance.bindForDefault();
        }
        return ContainerHolder.instance.container;
    }
}
