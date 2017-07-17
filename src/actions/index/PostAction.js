import BaseAction from '~/actions/BaseAction';
import util from 'util';

export default class PostAction extends BaseAction
{
    onDispatch(request: express$Request, response: express$Response) {
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
        request.getValidationResult()
            .then((result) => {
                if (!result.isEmpty()) {
                    response.status(400).send('There have been validation errors: ' + util.inspect(result.array()));
                    return;
                }
                response.send(request.body.name);
            });
    }
}
