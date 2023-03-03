import { userImages } from "./user-images";

export const chatMessages = [
  {
    mode: "sent",
    time: "1:53 PM",
    text: "Hi! How’re you?",
  },
  {
    mode: "sent",
    time: "1:54 PM",
    text: "Can you send me the books we bought?",
  },
  {
    mode: "received",
    time: "2:03 PM",
    text: "sure thing",
    userPhoto: userImages[7],
  },
  {
    mode: "received",
    time: "2:03 PM",
    text: "I have sent the books to you. Can you confirm?",
    userPhoto: userImages[7],
  },
];
