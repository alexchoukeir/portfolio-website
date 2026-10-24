import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo2.svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { links } from "@/data/links";
import { SiGithub } from "@icons-pack/react-simple-icons";
import linkedin from "@/public/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white z-50 mt-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="h-5"
              src={logo}
              alt="Logo"
              width={32}
              height={32}
              style={{ width: "auto" }}
            />
            <span className="self-center text-2xl text-heading font-semibold whitespace-nowrap">
              Alexander C.
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
              {links.map((link) => {
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "hover:underline me-4 md:me-6",
                      )}
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
        <hr className="my-6 border-default sm:mx-auto lg:my-8"></hr>
        <span className="block text-sm text-body sm:text-center flex justify-center gap-4">
          <Link
            href="https://github.com/alexchoukeir"
            className="flex items-center gap-2"
          >
            <SiGithub></SiGithub> alexchoukeir
          </Link>
          <Link
            href="https://www.linkedin.com/in/alexchoukeir/"
            className="flex items-center gap-2"
          >
            <Image
              className="h-8"
              src={linkedin}
              alt=""
              width={32}
              height={32}
              style={{ width: "auto" }}
            />
            alexchoukeir
          </Link>
        </span>
      </div>
    </footer>
  );
}
