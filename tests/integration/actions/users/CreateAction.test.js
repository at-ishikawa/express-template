// @flow
import "reflect-metadata";
import CreateAction from "~/actions/users/CreateAction";
import ContainerHolder from "~/containers/ContainerHolder";
import DomainUser from "~/domains/users/DomainUser";
import DomainUserFactory from "~/domains/users/DomainUserFactory";
import UserRepository from "~/repositories/db/UserRepository";
import ResponsePayload from "~/responders/ResponsePayload";
import CreateResponder from "~/responders/users/CreateResponder";
import "@/integration/actions/BaseActionTestCase";

describe('CreateAction test example', () => {
    let sut;

    let mockDomainUserFactory;

    let mockUserRepository;

    beforeEach(() => {
        ContainerHolder.clear();
        mockDomainUserFactory = {};
        mockUserRepository = {};

        const container = ContainerHolder.getContainer();
        container.bind(CreateResponder)
            .toConstantValue({});
        container.bind(DomainUserFactory)
            .toConstantValue(mockDomainUserFactory);
        container.bind(UserRepository)
            .toConstantValue(mockUserRepository);
        container.bind(CreateAction)
            .toSelf();

        sut = container.get(CreateAction);
    });

    test('onDispatch test', async () => {
        expect.assertions(4);

        mockDomainUserFactory.create = jest.fn()
            .mockImplementation((data) => new DomainUser()
                .setFields(data)
            );
        mockUserRepository.create = jest.fn()
            .mockImplementation((domain) => {
                domain.id = 1;
                return domain;
            });

        const actual = await sut.onDispatch();
        expect(actual).toBeInstanceOf(ResponsePayload);
        expect(actual.status).toBe(200);
        expect(actual.data.email).toBe('example@example.com');
        expect(actual.data.password).toBe('password');
    });
});
