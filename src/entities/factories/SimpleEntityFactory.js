// @flow
import {injectable} from "inversify";
import type BaseEntity from "~/entities/BaseEntity";

@injectable()
export default class SimpleEntityFactory
{
    constructor: Class<$Subtype<BaseEntity>>;

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
