import clsx from "clsx";
import { FaChevronLeft, FaTimes } from "react-icons/fa";
import { Header } from "@/components/header/header";
import { HeaderButton } from "@/components/header/header-button";
import { HeaderTitle } from "@/components/header/header-title";
import { InfoIcon } from "@/icons/info-icon";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const MainAreaHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Header
      left={
        !location.state?.showMenu ? (
          <HeaderButton className="md:hidden" onClick={() => navigate(-1)}>
            <FaChevronLeft className="w-6" />
          </HeaderButton>
        ) : null
      }
      center={<HeaderTitle>Larry Page</HeaderTitle>}
      right={
        <>
          {/* Menu Toggle */}
          <HeaderButton
            as={Link}
            className={clsx("xl:hidden", location.state?.showMenu && "hidden")}
            to={location.pathname}
            state={{
              showMainArea: true,
              showMenu: true,
            }}
            replace={false}
          >
            <InfoIcon className="w-6" />
          </HeaderButton>

          {/* Close Icon */}
          {location.state?.showMenu ? (
            <HeaderButton className="xl:hidden" onClick={() => navigate(-1)}>
              <FaTimes className="w-4 h-4" />
            </HeaderButton>
          ) : null}
        </>
      }
    />
  );
};
