// @flow
import { Container } from 'inversify';
import User from '~/entities/User';
import EntityUserFactory from "~/entities/factories/EntityUserFactory";
import DomainUser from '~/domains/users/DomainUser';
import DomainUserFactory from "~/domains/users/DomainUserFactory";
import UserRepository from "~/repositories/db/UserRepository";

export default class ContainerHolder
{
    static instance: ContainerHolder;

    static ENTITY_CLASSES = [
        User,

        EntityUserFactory
    ];

    static DOMAIN_CLASSES = [
        DomainUser,

        DomainUserFactory
    ];

    static REPOSITORY_CLASSES = [
        UserRepository
    ];

    container = new Container();

    constructor()
    {
    }

    static bindDefault() {
        this.getContainer();
        this.instance.bindClasses(ContainerHolder.DOMAIN_CLASSES);
        this.instance.bindClasses(ContainerHolder.ENTITY_CLASSES);
        this.instance.bindClasses(ContainerHolder.REPOSITORY_CLASSES);
    }

    static clear()
    {
        this.getContainer();
        this.instance.container = new Container();
    }

    bindClasses(classes: Array<Function>)
    {
        classes.forEach(c => {
            this.container.bind(c)
                .toSelf();
        });
    }

    static getContainer()
    {
        if (!ContainerHolder.instance) {
            ContainerHolder.instance = new ContainerHolder();
        }
        return ContainerHolder.instance.container;
    }
}
