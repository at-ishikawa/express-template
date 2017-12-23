// @flow
export default class ExtendedError extends Error
{
    constructor(message: string)
    {
        super(message);
        this.name = this.constructor.name;
        this.stack = (new Error(message)).stack;
    }

    isMonitored(): boolean
    {
        return true;
    }
}
