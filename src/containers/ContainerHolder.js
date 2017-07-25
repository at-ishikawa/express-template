// @flow
import { Container } from 'inversify';
import actionClasses from "./actionClasses";
import responderClasses from "./responderClasses";
import domainClasses from "./domainClasses";
import entityClasses from "./entityClasses";
import repositoryClasses from "./repositoryClasses";

export default class ContainerHolder
{
    static instance: ContainerHolder;

    container = new Container();

    constructor()
    {
    }

    static bindDefault() {
        this.getContainer();
        this.instance.bindClasses(actionClasses);
        this.instance.bindClasses(responderClasses);
        this.instance.bindClasses(domainClasses);
        this.instance.bindClasses(entityClasses);
        this.instance.bindClasses(repositoryClasses);
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
