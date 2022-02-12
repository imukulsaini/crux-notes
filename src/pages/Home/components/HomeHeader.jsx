import { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { useAuth } from "../../../context/auth/auth.context";
import { DropDownMenu } from "../../components/DropDown/DropDown";

export function HomeHeader() {
  const { userData } = useAuth();
  const [isDropDownMenu, setDropDown] = useState(false);

  return (
    <div className="home-header">
      <span className="brand__name">Crux Notes</span>

      <div className="top__account">
        <span className="top__action-name">{userData?.displayName}</span>

        <span
          onClick={() => setDropDown((isDropDownMenu) => !isDropDownMenu)}
          className="top__account-icon"
        >
          <RiAccountCircleFill
            size={"1.1rem"}
            color="#086dd6"
            className="account-icon"
          />
        </span>

      </div>
        {isDropDownMenu && <DropDownMenu />}
    </div>
    
  );
}
