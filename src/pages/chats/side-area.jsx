import { Contact } from "@/components/contact/contact";
import { Conversation } from "@/components/conversation/conversation";
import { Header } from "@/partials/header/header";
import { Navbar } from "@/partials/navbar/navbar";
import { SectionHeading } from "@/components/section-heading/section-heading";
import { availableContacts } from "@/fake/available-contacts";
import { conversations } from "@/fake/conversations";

import { useChats } from "./chats-context";

export const SideArea = () => {
  const { toggleMainArea } = useChats();

  return (
    <div className="h-screen overflow-auto flex flex-col md:border-r md:border-stone-200">
      {/* Header */}
      <div className="shrink-0">
        <Header title="Your group chats" />
      </div>

      {/* Content */}
      <div className="relative flex-grow overflow-y-scroll">
        <SectionHeading>Recent Chats</SectionHeading>
        <div className="divide-y divide-stone-100">
          {conversations.map((conversations, i) => (
            <div onClick={toggleMainArea} key={i}>
              <Conversation {...conversations} />
            </div>
          ))}
        </div>

        <SectionHeading>Available Friends</SectionHeading>
        <div className="divide-y divide-stone-100">
          {availableContacts.map((contact, i) => (
            <Contact key={i} {...contact} />
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div className="shrink-0">
        <Navbar />
      </div>
    </div>
  );
};