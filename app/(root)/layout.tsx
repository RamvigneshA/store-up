import Header from '@/components/Header';
import Mobile from '@/components/Mobile';
import Sidebar from '@/components/Sidebar';
import { getCurrentUser } from '@/lib/actions/users.actions';
import { redirect } from 'next/navigation';
import React from 'react'
const layout = async ({ children }: { children: React.ReactNode; }) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) return redirect("/sign-in");
  return (
    <div className='flex h-screen'>
      <Sidebar {...currentUser} />
      <section className='flex h-full flex-1 flex-col'>
        <Mobile{...currentUser} /> <Header/>
        <div className='main-content'>
          {children}
        </div>
      </section>
    </div>
  )
}

export default layout