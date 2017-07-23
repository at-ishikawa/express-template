// @flow
import "reflect-metadata";
import DomainUser from "~/domains/users/DomainUser";

describe('User Domain Test', () => {
    test('It should set fields', () => {
        const actual = new DomainUser();
        actual.setFields({
            id: 1,
            email: 'test@example.com',
            password: 'password',
            last_name: 'test'
        });
        expect(actual.id).toBe(1);
        expect(actual.email).toBe('test@example.com');
        expect(actual.password).toBe('password');
        expect(actual).not.toHaveProperty('created_at');
    });
});
