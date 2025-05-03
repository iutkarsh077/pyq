import UploadPapers from '@/components/custom/UploadPapers'
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const page =async () => {
  const userId = await currentUser();
    const adminEmail1 = process.env.ADMIN_EMAIL1;

    if(adminEmail1 != userId?.primaryEmailAddress?.emailAddress){
      redirect("/");
    }
  return (
    <div>
      <UploadPapers/>
    </div>
  )
}

export default page
