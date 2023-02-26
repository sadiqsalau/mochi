import { ChatIcon } from "@/icons/chat-icon";
import { ContactsIcon } from "@/icons/contacts-icon";
import { GroupIcon } from "@/icons/group-icon";
import { SettingsIcon } from "@/icons/settings-icon";

import { NavItem } from "./nav-item";
import { NavbarContainer } from "./navbar-container";

export const Navbar = () => (
  <NavbarContainer>
    <NavItem active icon={ChatIcon} title="Chats" />
    <NavItem icon={GroupIcon} title="Groups" />
    <NavItem icon={ContactsIcon} title="Contacts" />
    <NavItem icon={SettingsIcon} title="Settings" />
  </NavbarContainer>
);
