// @flow
import {createConnections} from "typeorm";
import ContainerHolder from "~/containers/ContainerHolder";
let connections;

beforeAll(async () => {
    ContainerHolder.clear();
    ContainerHolder.bindDefault();
    connections = await createConnections();
});

afterAll(async () => {
    await connections.forEach(async connection => {
        await connection.close();
    });
});
