import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

interface CardProps {
  title: string;
  content: string;
}

const ExpandableCard: React.FC<CardProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const containerVariants = {
    closed: {
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    open: {
      transition: { type: "spring", stiffness: 300, damping: 30 },
      width: "50vw",
    }
  };

  return (
    <div >
      <motion.div
       className={`p-4 bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden relative ${isOpen ? 'fixed z-50' : ''}`}
        onClick={toggleOpen}
        variants={containerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.h2 className="text-lg font-bold">{title}</motion.h2>
        <AnimatePresence>
          {isOpen && (
          
              <>{content}</>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ExpandableCard;
