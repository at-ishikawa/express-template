// @flow
import "reflect-metadata";
import ContainerHolder from "~/containers/ContainerHolder";
import UserRepository from "~/repositories/db/UserRepository";
import {getConnection} from "typeorm";
import DomainUser from "~/domains/users/DomainUser";
import "./BaseDbRepositoryTestCase";

describe('UserRepository Test', () => {
    let repository;
    let queryRunner;

    beforeEach(async () => {
        queryRunner = getConnection().createQueryRunner();
        await queryRunner.startTransaction();
        repository = ContainerHolder.getContainer().get(UserRepository);
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

    test('findById', async () => {
        const expected = {
            id: 1,
            email: 'test@example.com',
            password: 'password'
        };
        await queryRunner.truncate('user');
        await queryRunner.insert('user', expected);

        const actual = await repository.findById(1);
        expect(actual.email).toBe(expected.email);
        expect(actual.password).toBe(expected.password);
    });
});
