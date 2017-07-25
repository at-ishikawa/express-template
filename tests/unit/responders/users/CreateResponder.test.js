// @flow
import "reflect-metadata";
import CreateResponder from "~/responders/users/CreateResponder";
import ResponsePayload from "~/responders/ResponsePayload";

describe('CreateResponder unit test', () => {
    let sut;

    beforeEach(() => {
        sut = new CreateResponder();
    });

    test('respond', () => {

        (sut: any).response = {
            send: (actual) => {
                expect(actual).toBe('example');
            }
        };
        sut.respond(new ResponsePayload('example', 200));
    });
});
