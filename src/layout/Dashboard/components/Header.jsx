import React from "react";
import { useDispatch } from "react-redux";

import { adminLogout } from "../index";
function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(adminLogout())
  }
  return (
    <div>
      Header
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}

export default Header;
