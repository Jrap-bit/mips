"use client";
import React, { useEffect, useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false); // Scrolling down
      } else {
        setShow(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-white shadow-xs px-6 py-3",
        className
      )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo2.png"
            alt="MIPS Logo"
            width={180}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
        <Menu setActive={setActive}>
          <HoveredLink setActive={setActive} href="/">
            Home
          </HoveredLink>
          <HoveredLink setActive={setActive} href="/">
            About Us
          </HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem title="Patent" href="#" />
              <ProductItem title="Trademarks" href="#" />
              <ProductItem title="Industrial Design" href="#" />
              <ProductItem title="Copyright" href="#" />
              <ProductItem title="Geographic Indications" href="#" />
              <ProductItem title="Plant Variety Protection" href="#" />
            </div>
          </MenuItem>
          <HoveredLink setActive={setActive} href="/">
            Team
          </HoveredLink>
          <HoveredLink setActive={setActive} href="/">
            Contact Us
          </HoveredLink>
        </Menu>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className="rounded-md p-2"
  >
              <MenuIcon className="h-6 w-6" />
              </motion.button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[260px] sm:w-[300px]">
              
              <SheetTitle className="ml-6 mt-4 text-2xl">Menu</SheetTitle>
              <div className="mt-5 space-y-4 flex flex-col ml-6">
                <a href="/" className="text-lg font-medium text-gray-700 hover:text-gray-900">
                  Home
                </a>
                <a href="/" className="text-lg font-medium text-gray-700 hover:text-gray-900">
                  About Us
                </a>
                <div>
                  <p className="text-lg font-medium mb-2">Services</p>
                  <div className="ml-2 space-y-1 text-base text-muted-foreground">
                    <a href="#" className="block hover:text-gray-900">
                      Patent
                    </a>
                    <a href="#" className="block hover:text-gray-900">
                      Trademarks
                    </a>
                    <a href="#" className="block hover:text-gray-900">
                      Industrial Design
                    </a>
                    <a href="#" className="block hover:text-gray-900">
                      Copyright
                    </a>
                    <a href="#" className="block hover:text-gray-900">
                      Geographic Indications
                    </a>
                    <a href="#" className="block hover:text-gray-900">
                      Plant Variety Protection
                    </a>
                  </div>
                </div>
                <a href="/" className="text-lg font-medium text-gray-700 hover:text-gray-900">
                  Team
                </a>
                <a href="/" className="text-lg font-medium text-gray-700 hover:text-gray-900">
                  Contact Us
                </a>
              </div>
            </SheetContent>
          </Sheet>
          </div>

      </div>
    </motion.div>
  );
}