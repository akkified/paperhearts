import React from 'react';
import { auth } from "@/auth";
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Logout from "@/components/Logout";

const DonatePage = async () => {

  const session = await auth();

  if (!session?.user) redirect("/auth");

  return (
    <div className='flex flex-col items-center m-4'>
      <h1>{session?.user?.name}</h1>
      <Image
      src={session?.user?.image}
      width={72}
      height={72}
      alt="Picture of the user"
      />

      <Logout />
      
    </div>
  )
}

export default DonatePage