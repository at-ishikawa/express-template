// @flow
import { Container } from 'inversify';
import { User } from '~/entities/user';

export default class ContainerHolder
{
    static instance;

    container = new Container();

    constructor()
    {
    }

    bindForDefault()
    {
        this.container.bind(User).toSelf();
    }

    static getContainer()
    {
        if (!ContainerHolder.instance) {
            ContainerHolder.instance = new ContainerHolder();
            ContainerHolder.instance.bindForDefault();
        }
        return ContainerHolder.instance.container;
    }
}
