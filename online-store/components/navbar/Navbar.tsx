"use client";

import Container from "../Container";
import Input from "../ui/Input";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className=" w-full  z-10 shadow-sm">
      <div
        className="
             py-4
             border-b-[2px]
            "
      >
        <Container>
          <div
            className="
                    flex
                    flex-row
                    items-center
                    w-[1000px]
                    gap-3
                    md:gap-20
                   "
          >
            <Logo />
            <Input label="Search" id="1" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
