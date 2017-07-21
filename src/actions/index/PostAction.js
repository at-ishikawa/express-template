import BaseAction from '~/actions/BaseAction';
import util from 'util';
import ResponsePayload from "~/responders/ResponsePayload";

export default class PostAction extends BaseAction
{
    async onDispatch(request: express$Request)
    {
        request.checkBody({
            'name': {
                notEmpty: true,
                isLength: {
                    options: [{
                        min: 3
                    }]
                }
            }
        });
        const result = await request.getValidationResult();
        if (!result.isEmpty()) {
            return new ResponsePayload('There have been validation errors: ' + util.inspect(result.array()), 400);
        }
        return new ResponsePayload(request.body.name);
    }
}
