import { FiLogOut } from "react-icons/fi";
import { logoutUser } from "../../../firebase/firebase.config";

export function DropDownMenu() {
  return (
    <div className="dropdown__menu">
      <ul className="menu">
        <li
          onClick={() => logoutUser()}
          className="menu__logout menu__list-item"
        >
          <FiLogOut className="menu-icon" color="#086dd6" />
          <span className="menu__action-name">Logout</span>
        </li>
      </ul>
    </div>
  );
}
