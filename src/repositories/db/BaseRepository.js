// @flow
import ContainerHolder from "~/containers/ContainerHolder";
import {getConnection} from "typeorm";
import {injectable} from "inversify";

@injectable()
export default class BaseRepository
{
    connection: any;
    entityRepository: any;
    container: any;

    constructor()
    {
        this.connection = getConnection();
        this.container = ContainerHolder.getContainer();
    }
}
