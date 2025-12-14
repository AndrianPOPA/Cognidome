"use client";
import React from "react";
import Logo from "../logo/Logo";
import Link from "next/link";
import Cart from "../carts/Cart";
import { ThemeToggle } from "../theme/ThemeToggle";
import AccountPopover from "../account/AccountPopover";
import MobileHeader from "./MobileHeader";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const HeaderOne = () => {
  const pathname = usePathname();

  const links = [
    {
      label: "Home",
      link: "/",
      isActive: pathname === "/",
    },
    {
      label: "Solutions",
      link: "/shop",
      isActive: pathname.startsWith("/shop"),
    },
    {
      label: "Services",
      link: "/services",
      isActive: pathname === "/services",
    },
    {
      label: "Consultation",
      link: "/consultation",
      isActive: pathname === "/consultation",
    }
  ];

  return (
    <header className="sticky bg-white dark:bg-slate-950 top-0 z-50 w-full">
      <div className="max-w-screen-xl mx-auto p-4 md:py-4 md:px-8 flex items-center justify-between gap-2">
        <Logo />
        <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-lg">
          {links.map((link) => (
            <Link
              key={link.link}
              className={cn(
                "font-medium px-4 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800",
                link.isActive && "bg-gray-200 dark:bg-gray-800 rounded-full"
              )}
              href={link.link}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6 lg:gap-2 lg:-mt-1">
            {/* <div className="hidden lg:block">
              <ThemeToggle />
            </div> */}
            <AccountPopover />
            <Cart />
            <MobileHeader />
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default HeaderOne;