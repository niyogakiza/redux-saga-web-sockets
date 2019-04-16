import { ADD_USER } from "../consts/const";

let nextUserId = 0;
export const addUser = name => ({
  type: ADD_USER,
  id: nextUserId++,
  name
});

