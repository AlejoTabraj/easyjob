import React from "react";
import { Anchor } from "../Atoms/Anchor";
import { AiFillHome } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { MdSave } from "react-icons/md";

export const FooterNav = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Anchor href={'#'} classes={'nav'}>
            <AiFillHome />
          </Anchor>
        </li>
        <li>
          <Anchor href={'#'} classes={'nav'}>
            <IoIosNotifications />
          </Anchor>
        </li>
        <li>
          <Anchor href={'#'} classes={'nav'}>
            <FaBriefcase />
          </Anchor>
        </li>
        <li>
          <Anchor href={'#'} classes={'nav'}>
            <MdSave />
          </Anchor>
        </li>
      </ul>
    </nav>
  );
};
