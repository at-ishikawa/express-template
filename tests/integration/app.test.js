// @flow
import request from 'supertest';
import app from '~/app';

describe("Routing tests", () => {

    const routes = [
        "/",
    ];

    routes.forEach(route => {
        test(`GET ${route} returns 200`, () => {
            return request(app).get(route).expect(200);
        })
    });
});
