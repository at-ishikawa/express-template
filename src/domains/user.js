
export class User
{
    id: int = undefined;

    email: string = undefined;

    password: string = undefined;

    constructor(props)
    {
        for (let key in props) {
            if (!(key in this)) {
                continue;
            }
            let value = props[key];
            this[key] = value;
        }
    }
}
