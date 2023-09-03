"use client";

import Container from "../Container";
import Input from "../ui/Input";
import Logo from "./Logo";


const Navbar:React.FC<InputProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className=" w-full z-10 shadow-sm">
      <div
        className="
             w-full
             py-4
             border-b-[1px]
            "
      >
        <Container>
          <div
            className="
                    flex
                    flex-row
                    items-center
                    w-full
                    md:w-[1000px]
                    gap-3
                    md:gap-20
                   "
          >
            <Logo />
            <Input searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
