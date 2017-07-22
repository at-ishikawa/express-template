// @flow
import { Container } from 'inversify';
import User from '~/entities/User';
import DomainUser from '~/domains/DomainUser';
import DomainUserFactory from "~/domains/DomainUserFactory";
import EntityUserFactory from "~/entities/EntityUserFactory";
import UserRepository from "~/repositories/db/UserRepository";

export default class ContainerHolder
{
    static instance;

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

    bindDefault() {
        this.bindClasses(ContainerHolder.DOMAIN_CLASSES);
        this.bindClasses(ContainerHolder.ENTITY_CLASSES);
        this.bindClasses(ContainerHolder.REPOSITORY_CLASSES);
    }

    bindClasses(classes: Array<Function>)
    {
        classes.forEach(c => {
            this.container.bind(c).toSelf();
        });
    }

    static getContainer()
    {
        if (!ContainerHolder.instance) {
            ContainerHolder.instance = new ContainerHolder();
            ContainerHolder.instance.bindDefault();
        }
        return ContainerHolder.instance.container;
    }
}
