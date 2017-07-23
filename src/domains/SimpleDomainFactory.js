// @flow
import {injectable} from "inversify";
import type BaseDomain from "~/domains/BaseDomain";

@injectable()
export default class SimpleDomainFactory
{
    constructor: Class<$Subtype<BaseDomain>>;

    create(object: Object)
    {
        let target = new this.constructor();
        target.setFields(object);
        return target;
    }
}
