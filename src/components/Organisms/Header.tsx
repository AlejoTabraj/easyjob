import React from "react";
import { Title } from "../Molecules/Title";
import { PerfilAvatar } from "../Molecules/PerfilAvatar";
import { Search } from "../Molecules/Search";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <Title />
        <PerfilAvatar />
      </div>
      <div className='header__search'>
      <Search />
        </div>
      
    </header>
  );
};
