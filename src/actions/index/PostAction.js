import util from 'util';
import {inject} from "inversify";
import BaseAction from '~/actions/BaseAction';
import ResponsePayload from "~/responders/ResponsePayload";
import PostResponder from "~/responders/index/PostResponder";

export default class PostAction extends BaseAction
{
    @inject(PostResponder)
    responder: PostResponder = new PostResponder();

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
