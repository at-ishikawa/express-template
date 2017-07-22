import EntitySimpleFactory from "./SimpleEntityFactory";
import User from "./User";

export default class EntityUserFactory extends EntitySimpleFactory
{
    constructor: Function = User;
}
