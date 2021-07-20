import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineAlert } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { AiOutlineSave } from "react-icons/ai";
import { Link } from "react-router-dom";

export const FooterNav = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to='/'>
            <AiOutlineHome />
          </Link>
        </li>
        <li>
          <Link to='/alerts'>
            <AiOutlineAlert />
          </Link>
        </li>
        <li>
          <Link to='/jobs'>
            <BiBriefcase />
          </Link>
        </li>
        <li>
          <Link to='/saved'>
            <AiOutlineSave />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
