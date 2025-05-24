"use client";
import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ duration: 0.2 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white font-medium text-lg">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className="absolute top-[calc(100%+1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-xs rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 ">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <div>
        <motion.div
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileTap={{ scale: 0.95 }}>
          <h4 className="text-base font-medium mb-1 text-black dark:text-white">
            {title}
          </h4>
        </motion.div>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  setActive,
  item,
  ...rest
}: {
  children: React.ReactNode;
  setActive?: (item: string | null) => void;
  item?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & { className?: string }) => {
  return (
    <a
      {...rest}
      onMouseEnter={() => {
        if (setActive) {
          setActive(null);
        }
      }}
      className="text-neutral-900 dark:text-neutral-200 hover:text-black font-medium text-lg">
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        whileTap={{ scale: 0.95 }}>
        {children}
      </motion.div>
    </a>
  );
};
