// @flow
import {injectable} from "inversify";

@injectable()
export default class SimpleEntityFactory
{
    constructor: Function;

    create(object: Object)
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
