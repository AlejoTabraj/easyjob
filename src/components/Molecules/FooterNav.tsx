import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { MdSave } from "react-icons/md";
import { Link } from "react-router-dom";

export const FooterNav = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to='/'>
            <AiFillHome />
          </Link>
        </li>
        <li>
          <Link to='/alerts'>
            <IoIosNotifications />
          </Link>
        </li>
        <li>
          <Link to='/jobs'>
            <FaBriefcase />
          </Link>
        </li>
        <li>
          <Link to='/saved'>
            <MdSave />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
