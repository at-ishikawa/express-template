// @flow
import {injectable} from "inversify";

@injectable()
export default class SimpleDomainFactory
{
    constructor: Function;

    create(object: any)
    {
        let target = new this.constructor();
        target.setFields(object);
        return target;
    }
}
