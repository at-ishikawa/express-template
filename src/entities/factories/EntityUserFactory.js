// @flow
import EntitySimpleFactory from "./SimpleEntityFactory";
import User from "~/entities/User";

export default class EntityUserFactory extends EntitySimpleFactory
{
    constructor: Class<User> = User;
}
