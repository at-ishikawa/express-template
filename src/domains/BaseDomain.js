// @flow
import {injectable} from "inversify";

@injectable()
export default class BaseDomain
{
    constructor()
    {
    }

    setFields(fields: Object): $Subtype<BaseDomain>
    {
        let objectFields = {};
        for (let name: string in fields) {
            if (!(name in this)) {
                continue;
            }
            let value = fields[name];
            objectFields[name] = value;
        }
        Object.assign(this, objectFields);
        return this;
    }
}
