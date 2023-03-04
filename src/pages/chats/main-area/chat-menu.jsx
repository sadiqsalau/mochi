import { DeleteIcon } from "@/icons/delete-icon";
import { HistoryIcon } from "@/icons/history-icon";
import { ProfileIcon } from "@/icons/profile-icon";
import { ReportConversationIcon } from "@/icons/report-conversation-icon";

import { ChatMenuItem } from "./chat-menu-item";

export const ChatMenu = () => (
  <div className="h-full overflow-y-auto">
    <div className="bg-[#FAFFF2]">
      <ChatMenuItem icon={ProfileIcon} title="View User Profile" />
      <ChatMenuItem icon={DeleteIcon} title="Delete Conversation" />
      <ChatMenuItem icon={ReportConversationIcon} title="Report Conversation" />
      <ChatMenuItem icon={HistoryIcon} title="View Chat History" />
    </div>
  </div>
);
