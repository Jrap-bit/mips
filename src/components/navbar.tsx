"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
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
        }
        else {
            setShow(true); // Scrolling up
        }
        setLastScrollY(currentScrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
    }, [lastScrollY]);


  return (
    <motion.div
  animate={{ y: show ? 0 : -100 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  className={cn(
    "fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-6 py-3",
    className
  )}
>
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

      <Menu setActive={setActive}>
        <HoveredLink setActive={setActive} href="/"> 
        Home   
        </HoveredLink>
        <HoveredLink setActive={setActive} href="/">
            About Us
        </HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Patent"
              href="#"
            />
            <ProductItem
              title="Trademarks"
              href="#"
            />
            <ProductItem
              title="Industrial Design"
              href="#"
            />
            <ProductItem
              title="Copyright"
              href="#"
            />
                        <ProductItem
              title="Geographic Indications"
              href="#"
            />
                        <ProductItem
              title="Plant Variety Protection"
              href="#"
            />
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
    </motion.div>
  );
}
