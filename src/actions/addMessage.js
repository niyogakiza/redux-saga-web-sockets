import { ADD_MESSAGE } from "../consts/const";

let nextMessageId = 0;
export const addMessage = (message, author) => ({
  type: ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
});
