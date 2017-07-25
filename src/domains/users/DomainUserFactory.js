// @flow
import DomainUser from "./DomainUser";
import SimpleDomainFactory from "../SimpleDomainFactory";

export default class DomainUserFactory extends SimpleDomainFactory
{
    domainConstructor: Class<DomainUser> = DomainUser;

    constructor()
    {
        super();
    }
}
