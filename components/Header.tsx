import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import FileUploader from './FileUploader';
import Search from './Search';
import { signOutUser } from '@/lib/actions/users.actions';
interface Props {
  userId: string;
  accountId: string;
}
const Header = ({ userId,accountId }: Props) => {
  return (
    <header className="header">
      <Search/>
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId}  />
        <form action={async () => {
          "use server";
          await signOutUser();
        }}>
          <Button type="submit" className="sign-out-button "  >
          
            <Image
              src="/assets/icons/logout.svg"
              alt="logo"
              width={20}
              height={20}
              className="ml-2 w-6 "
            />
          <p className='mr-2'> logout</p>
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
