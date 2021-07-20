import React from "react";
import { Button } from "../Atoms/Button";
import { Input } from "../Atoms/Input";
import { IoMdOptions } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

export const Search = () => {
  return (
    <section className="search">
      <Button classes={'btn-primary1'}>
        <BsSearch size={'1.5em'} />
      </Button>
      <Input classes={'search-input'} />
      <Button classes={'btn-primary2'}>
        <IoMdOptions size={'1.5em'}/>
      </Button>
    </section>
  );
};
