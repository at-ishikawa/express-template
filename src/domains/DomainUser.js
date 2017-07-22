// @flow
import BaseDomain from "./BaseDomain";

export default class DomainUser extends BaseDomain
{
    id: number = 0;

    email: string = "";

    password: string = "";

    constructor()
    {
        super();
    }
}
