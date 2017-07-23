// @flow
import "reflect-metadata";
import CreateAction from "~/actions/users/CreateAction";
import ContainerHolder from "~/containers/ContainerHolder";
import DomainUser from "~/domains/users/DomainUser";
import DomainUserFactory from "~/domains/users/DomainUserFactory";
import UserRepository from "~/repositories/db/UserRepository";
import ResponsePayload from "~/responders/ResponsePayload";
import BaseResponder from "~/responders/BaseResponder";

describe('CreateAction test example', () => {
    let sut;

    beforeEach(() => {
        ContainerHolder.clear();
        const c = new class extends BaseResponder {};
        sut = new CreateAction(c);
    });

    test('onDispatch test', async () => {
        expect.assertions(4);

        const container = ContainerHolder.getContainer()

        container.bind(DomainUserFactory).toConstantValue({
            create: jest.fn()
                .mockImplementation((data) => new DomainUser()
                    .setFields(data)
                )
        });
        container.bind(UserRepository).toConstantValue({
            create: jest.fn()
                .mockImplementation((domain) => {
                    domain.id = 1;
                    return domain;
                })
        });

        const actual = await sut.onDispatch();
        expect(actual).toBeInstanceOf(ResponsePayload);
        expect(actual.status).toBe(200);
        expect(actual.data.email).toBe('example@example.com');
        expect(actual.data.password).toBe('password');
    });
});
