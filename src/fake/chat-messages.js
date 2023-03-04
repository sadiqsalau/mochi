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
  {
    mode: "sent",
    time: "3:50 PM",
    text: "Yes thanks!",
  },
  {
    mode: "sent",
    time: "3:51 PM",
    text: "Are you coming to the party? Everyone will be there.",
  },
  {
    mode: "received",
    time: "3:52 PM",
    text: "Sure, I will be there!",
    userPhoto: userImages[7],
  },
  {
    mode: "received",
    time: "3:52 PM",
    text: "I've got some few things to take care of before I join you guys.\
    Don't start the party without me 😀️",
    userPhoto: userImages[7],
  },
];
