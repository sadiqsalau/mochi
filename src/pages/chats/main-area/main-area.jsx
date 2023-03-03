import clsx from "clsx";
import { FaChevronLeft } from "react-icons/fa";
import { Header } from "@/components/header/header";
import { HeaderButton } from "@/components/header/header-button";
import { HeaderTitle } from "@/components/header/header-title";
import { useNavigate } from "react-router-dom";

export const MainArea = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="shrink-0">
        <Header
          left={
            <HeaderButton className="md:hidden" onClick={() => navigate(-1)}>
              <FaChevronLeft />
            </HeaderButton>
          }
          center={<HeaderTitle>Larry Page</HeaderTitle>}
        />
      </div>

      {/* Content */}
      <div className="grow overflow-hidden">
        <div
          className={clsx(
            "h-full lg:w-full grid grid-cols-[1fr_350px]",
            "duration-500 lg:transform-none",
            location.state?.showMenu && "-translate-x-[350px]"
          )}
        ></div>
      </div>
    </div>
  );
};
