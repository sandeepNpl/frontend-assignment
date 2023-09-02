"use client";
import { useRouter } from "next/navigation";
import { Aleo } from "next/font/google";
const font = Aleo( { subsets: ['latin'] } )
const Logo = () => {
  return (
    <div>
    <h2 className={` text-black text-2xl font-extrabold ${font.className}`}>Online Store</h2>
    </div>
  );
};

export default Logo;
