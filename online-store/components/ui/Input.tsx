import React from "react";
import { BiSearch } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ id, label }: InputProps) => {
  return (
    <div className=" flex flex-row   my-auto">
      <input
        className="w-full rounded-l-full ml-8 mx-auto  md:ml-10 md:w-[650px]   border border-r-0 focus:border-black focus:outline-none border-subdued  peer px-4  text-sm "
        placeholder={`what's on your mind`}
      />
      <button className="flex h-10 items-center space-x-3 rounded-r-full border border-subdued peer-focus:border-black px-4 text-brand">
        <BiSearch color="#455054" size={18}  />
      </button>
    </div>
  );
};

export default Input;
