// @flow
import {injectable} from "inversify";
import type BaseDomain from "~/domains/BaseDomain";

@injectable()
export default class SimpleEntityFactory
{
    constructor: Function;

    create(object: BaseDomain)
    {
        let target = new this.constructor();
        for (let fieldName in object) {
            if (!(fieldName in target)) {
                continue;
            }

            target[fieldName] = object[fieldName];
        }
        return target;
    }
}
