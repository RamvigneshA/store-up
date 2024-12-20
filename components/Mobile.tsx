'use client';
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { avatarPlaceholderUrl, navItems } from '@/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import FileUploader from './FileUploader';
import { signOutUser } from '@/lib/actions/users.actions';
interface Props {
  fullName: string;
  avatar: string;
  email: string;
  accountId: string;
  $id: string;
}
const Mobile = ({ fullName, email, accountId, $id }: Props) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="mobile-header">
      <div>
        <Image
          src="/assets/icons/LOGO.png"
          alt="logo"
          width={30}
          height={30}
          className="h-auto  mx-3 mt-3"
        />
        <span className='sm:font-extralight text-sm mx-2.5'>Drive</span>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            alt="search"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                src={avatarPlaceholderUrl}
                alt="avatar"
                width={44}
                height={44}
                className="header-user-avatar"
              />
              <div className="sm:hidden lg:block">
                <p className="subtitle-2 capitalize">{fullName}</p>
                <p className="caption">{email}</p>
              </div>
            </div>
            <Separator className="mb-4 bg-light-200" />
          </SheetTitle>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map(({ url, name, icon }) => (
                <Link key={name} href={url} className="lg:w-full">
                  <li
                    className={cn(
                      'mobile-nav-item',
                      pathName === url && 'shad-active'
                    )}
                  >
                    <Image
                      src={icon}
                      alt={name}
                      width={24}
                      height={24}
                      className={cn(
                        'nav-icon',
                        pathName === url && 'nav-icon-active'
                      )}
                    />
                    <p className="block">{name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <Separator className="mb-4 bg-light-200" />
          <div className="flex flex-col justify-between gap-5">
            <FileUploader ownerId={$id} accountId={accountId} />
            <Button
              type="submit"
              className="mobile-sign-out-button"
              onClick={async () => await signOutUser()}
            >
              <Image
                src="/assets/icons/logout.svg"
                alt="logo"
                width={24}
                height={24}
              />
              <p>Logout</p>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Mobile;
