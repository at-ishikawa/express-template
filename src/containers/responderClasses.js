// @flow
import IndexResponder from "~/responders/index/IndexResponder";
import PostResponder from "~/responders/index/PostResponder";
import UsersCreateResponder from "~/responders/users/CreateResponder";
import UsersIndexResponder from "~/responders/users/IndexResponder";

export default [
    IndexResponder,
    PostResponder,
    UsersCreateResponder,
    UsersIndexResponder
];
