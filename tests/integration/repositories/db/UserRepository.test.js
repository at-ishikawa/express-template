// @flow
import "reflect-metadata";
import ContainerHolder from "~/containers/ContainerHolder";
import UserRepository from "~/repositories/db/UserRepository";
import {createConnections, getConnection} from "typeorm";
import DomainUser from "~/domains/users/DomainUser";

describe('UserRepository Test', () => {
    let repository;
    let queryRunner;
    let connections;

    beforeAll(async () => {
        ContainerHolder.bindDefault();
        connections = await createConnections();
    });

    afterAll(async () => {
        connections.forEach(async connection => {
            await connection.close();
        });
    });

    beforeEach(async () => {
        queryRunner = getConnection().createQueryRunner();
        await queryRunner.startTransaction();
        repository = new UserRepository();
    });

    afterEach(async () => {
        await queryRunner.rollbackTransaction();
    });

    test('create', async () => {
        expect.assertions(3);
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
