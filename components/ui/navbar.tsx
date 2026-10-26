"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo2.svg";
import { links } from "@/data/links";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    // Create the callback function
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setActiveSection(e.target.id);
        }
      });
    };

    // Define the options for the IntersectionObserver
    const options = { rootMargin: "-120px 0px -85% 0px", threshold: 0 };

    // Create an IntersectionObserver instance
    const sectionObserver = new IntersectionObserver(callback, options);

    // Observe each section
    links.forEach((link) => {
      const e = document.getElementById(link.href.replace("#", ""));
      if (e instanceof Element) {
        sectionObserver.observe(e);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  });
  return (
    <header className="fixed w-full inset-x-0 top-4 z-50 start-0">
      <div className="max-w-screen-xl rounded-2xl flex flex-wrap items-center justify-between mx-auto px-6 py-4 transition-colors duration-300 text-white bg-black/40 backdrop-blur-xl border border-black shadow-[0px_3px_0px_0px_rgba(0,0,0,1)]">
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            className="h-4"
            src={logo}
            alt="Logo"
            width={32}
            height={32}
            style={{ width: "auto" }}
          />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Alexander C.
          </span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    className="font-medium"
                    render={<Link href={link.href}></Link>}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0"}`}
                    ></span>
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
