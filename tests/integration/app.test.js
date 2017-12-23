// @flow
import request from 'supertest';
import app from '~/app';
import ContainerHolder from "~/containers/ContainerHolder";
import {createConnections} from "typeorm";

describe("Routing tests", () => {

    const routes = [
        "/",
        "/users/1"
    ];

    let connections;

    beforeAll(async () => {
        connections = await createConnections();
    });

    afterAll(async () => {
        await connections.forEach(async connection => {
            await connection.close();
        });
    });

    beforeEach(() => {
        ContainerHolder.clear();
    });

    routes.forEach(route => {
        test(`GET ${route} returns 200`, () => {
            return request(app()).get(route).expect(200);
        })
    });
});
