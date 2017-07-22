// @flow
import "reflect-metadata";
import ContainerHolder from "~/containers/ContainerHolder";
import UserRepository from "~/repositories/db/UserRepository";
import {createConnections, getConnection} from "typeorm";
import DomainUser from "~/domains/DomainUser";

describe('UserRepository Test', () => {
    let repository;
    let queryRunner;

    beforeAll(async () => {
        ContainerHolder.bindDefault();
        await createConnections();
    });

    beforeEach(() => {
        queryRunner = getConnection().createQueryRunner();
        queryRunner.startTransaction();
        repository = new UserRepository();
    });

    afterEach(() => {
        queryRunner.rollbackTransaction();
    });

    test('create', async () => {
        const input = {
            email: 'test@example.com',
            password: 'password',
        };
        const domain = new DomainUser()
            .setFields(input);

        const actual = await repository.create(domain);

        expect(actual.email).toBe(domain.email);
        expect(actual.password).toBe(domain.password);
        expect(actual.id).toBeGreaterThan(0);
    });
});
