import React from "react";
import { motion } from "framer-motion";

export const SimpleFloatingNav = () => {
  return (
    <nav className="fixed left-[5%] bottom-[5%] bg-white  flex w-fit items-center gap-8 rounded-lg  p-6 shadow-md text-md text-black font-black z-10">

      <NavLink>HOME</NavLink>
      <NavLink>PROJECTS</NavLink>
      <NavLink>CONTACT</NavLink>
    </nav>
  );
};


interface NavLinkProps{
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children }) => {
  return (
    <a href="#" rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-orange-500">
          {children}
        </span>
      </motion.div>
    </a>
  );
};
