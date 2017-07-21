// @flow
export default class ResponsePayload
{
    data: any = null;
    status: number;

    constructor(data: any, status: number = 200)
    {
        this.data = data;
        this.status = status;
    }
}
