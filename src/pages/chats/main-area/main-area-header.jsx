import { FaChevronLeft } from "react-icons/fa";
import { Header } from "@/components/header/header";
import { HeaderButton } from "@/components/header/header-button";
import { HeaderTitle } from "@/components/header/header-title";
import { useNavigate } from "react-router-dom";

export const MainAreaHeader = () => {
  const navigate = useNavigate();
  return (
    <Header
      left={
        <HeaderButton className="lg:hidden" onClick={() => navigate(-1)}>
          <FaChevronLeft />
        </HeaderButton>
      }
      center={<HeaderTitle>Larry Page</HeaderTitle>}
    />
  );
};
