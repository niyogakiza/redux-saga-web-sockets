import { MESSAGE_RECEIVED } from "../consts/const";

let nextMessageId = 0;
export const messageReceived = (message, author) => ({
  type: MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
});
