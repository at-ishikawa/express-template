// @flow
import express from "express";
import type BaseAction from "~/actions/BaseAction";

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

    get(url: string, action: BaseAction)
    {
        this.expressRouter.get(url, action.execute);
    }

    post(url: string, action: BaseAction)
    {
        this.expressRouter.post(url, action.execute);
    }
}
