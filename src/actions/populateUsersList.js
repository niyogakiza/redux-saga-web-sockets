import { USERS_LIST } from "../consts/const";

export const populateUserList = users => ({
  type: USERS_LIST,
  users
});
