export default class BaseDomain
{
    constructor()
    {
    }

    setFields(fields)
    {
        for (let name in fields) {
            if (!(name in this)) {
                continue;
            }
            let value = fields[name];
            this[name] = value;
        }
    }
}
