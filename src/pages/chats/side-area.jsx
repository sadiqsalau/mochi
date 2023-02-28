import { ComposeIcon } from "@/icons/compose-icon";
import { Contact } from "@/components/contact/contact";
import { Conversation } from "@/components/conversation/conversation";
import { FaChevronLeft } from "react-icons/fa";
import { Header } from "@/components/header/header";
import { HeaderButton } from "@/components/header/header-button";
import { HeaderTitle } from "@/components/header/header-title";
import { Link } from "react-router-dom";
import { Navbar } from "@/partials/navbar/navbar";
import { NotificationIcon } from "@/icons/notification-icon";
import { SectionHeading } from "@/components/section-heading/section-heading";
import { availableContacts } from "@/fake/available-contacts";
import { conversations } from "@/fake/conversations";

export const SideArea = () => {
  return (
    <div className="h-screen overflow-auto flex flex-col md:border-r md:border-stone-200">
      {/* Header */}
      <div className="shrink-0">
        <Header
          left={
            <HeaderButton>
              <FaChevronLeft />
            </HeaderButton>
          }
          center={<HeaderTitle>Your group chats</HeaderTitle>}
          right={
            <>
              <HeaderButton>
                <NotificationIcon className="w-4" />
              </HeaderButton>
              <HeaderButton>
                <ComposeIcon className="w-4" />
              </HeaderButton>
            </>
          }
        />
      </div>

      {/* Content */}
      <div className="relative flex-grow overflow-y-scroll">
        <SectionHeading>Recent Chats</SectionHeading>
        <div className="divide-y divide-stone-100">
          {conversations.map((conversations, i) => (
            <Link
              key={i}
              to="/chats"
              replace={false}
              state={{
                showMainArea: true,
              }}
            >
              <Conversation {...conversations} />
            </Link>
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
