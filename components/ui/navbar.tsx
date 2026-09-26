"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed w-full inset-x-0 top-4 z-50 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4 transition-colors duration-300 bg-white/50 backdrop-blur-xl border-1 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Alexander Choukeir
          </span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {links.map((link) => {
              return (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    className="hover:bg-white/50 focus:bg-white/50"
                    render={<Link href={link.href}></Link>}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
