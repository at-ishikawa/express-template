// @flow
import {createConnections} from "typeorm";
let connections;

beforeAll(async () => {
    connections = await createConnections();
});

afterAll(async () => {
    await connections.forEach(async connection => {
        await connection.close();
    });
});
