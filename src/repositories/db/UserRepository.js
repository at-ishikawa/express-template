// @flow
import User from "~/entities/User";
import DomainUser from '~/domains/users/DomainUser';
import DomainUserFactory from "~/domains/users/DomainUserFactory";
import EntityUserFactory from "~/entities/factories/EntityUserFactory";
import BaseRepository from "./BaseRepository";

export default class UserRepository extends BaseRepository
{
    constructor()
    {
        super();
        this.entityRepository = this.connection.getRepository(User);
    }

    async create(user: DomainUser): Promise<DomainUser>
    {
        let entity = this.container.get(EntityUserFactory)
            .create(user);
        await this.entityRepository.persist(entity);
        return this.container.get(DomainUserFactory)
            .create(entity);
    }

    async findById(id: int): Promise<DomainUser>
    {
        const entity = await this.entityRepository.findOneById(id)
        return this.container.get(DomainUserFactory)
            .create(entity);
    }
}
