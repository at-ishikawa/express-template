// @flow
import express from "express";
import type BaseAction from "~/actions/BaseAction";
import ContainerHolder from "~/containers/ContainerHolder";

export default class Router
{
    _expressRouter: express$Router;

    constructor()
    {
        this._expressRouter = express.Router();
    }

    get expressRouter(): express$Router
    {
        return this._expressRouter;
    }

    get(url: string, action: Class<$Subtype<BaseAction>>)
    {
        this.expressRouter.get(url, this.getAction(action));
    }

    post(url: string, action: Class<$Subtype<BaseAction>>)
    {
        this.expressRouter.post(url, this.getAction(action));
    }

    getAction(actionClass: Class<$Subtype<BaseAction>>): Function
    {
        return ContainerHolder.getContainer()
            .get(actionClass)
            .execute;
    }
}
