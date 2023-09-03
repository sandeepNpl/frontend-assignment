"use client";
import { useRouter } from "next/navigation";
import { Aleo } from "next/font/google";
import Link from "next/link";
const font = Aleo({ subsets: ["latin"] });
const Logo = () => {
  return (
    <div>
      <Link href={'/'}>
        <h2 className={` text-black text-2xl font-extrabold ${font.className}`}>
          Online Store
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
