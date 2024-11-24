
"use client";

import Link from "next/link";
import Image from "next/image";
import {  navItems } from "@/constants/index";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, email }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar ">
      <Link href="/">
        <Image
          src="/assets/icons/LOGO.png"
          alt="logo"
          width={60}
          height={50}
          className="hidden h-auto lg:block"
        />
        <span className="hidden h-auto lg:block pl-2">Drive</span>

        <Image
          src="/assets/icons/LOGO.png"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
        <span className="lg:hidden pl-1">Drive</span>

      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href={url} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active",
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active",
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Image
        src="/assets/icons/FILE.png"
        alt="logo"
        width={106}
        height={118}
        className="w-full"
      />

      <div className="sidebar-user-info pl-3">
       
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="text-xs">{email}</p>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
