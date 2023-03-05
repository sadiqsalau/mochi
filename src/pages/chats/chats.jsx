import { ChatsGrid } from "./chats-grid";
import { MainArea } from "./main-area/main-area";
import { SideArea } from "./side-area";

export const Chats = () => (
  <ChatsGrid>
    <SideArea />
    <MainArea />
  </ChatsGrid>
);
