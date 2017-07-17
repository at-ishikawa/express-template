// @flow
import BaseDomain from "./base-domain";

export default class User extends BaseDomain
{
    id: number = 0;

    email: string = "";

    password: string = "";

    constructor()
    {
        super();
    }
}
