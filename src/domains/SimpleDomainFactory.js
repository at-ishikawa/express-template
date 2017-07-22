// @flow
import {injectable} from "inversify";

@injectable()
export default class SimpleDomainFactory
{
    constructor: Function;

    create(object: any)
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
