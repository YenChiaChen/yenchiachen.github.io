import React from "react";
import { motion } from "framer-motion";

export const SimpleFloatingNav = () => {
  return (
    <nav className="fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-16 rounded-lg  p-2 text-md text-black">

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
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center font-bold">
          {children}
        </span>
      </motion.div>
    </a>
  );
};
