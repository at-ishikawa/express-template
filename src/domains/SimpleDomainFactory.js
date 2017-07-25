// @flow
import {injectable} from "inversify";
import type BaseDomain from "~/domains/BaseDomain";

@injectable()
export default class SimpleDomainFactory
{
    domainConstructor: Class<$Subtype<BaseDomain>>;

    constructor()
    {
    }

    create(object: Object)
    {
        let target = new this.domainConstructor();
        target.setFields(object);
        return target;
    }
}
