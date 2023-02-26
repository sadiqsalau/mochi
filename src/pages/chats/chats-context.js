import { createContext } from "react";
import { createProvider } from "@/utils/create-provider";

export const { hook: useChats, provider: ChatsProvider } = createProvider(
  createContext({})
);
