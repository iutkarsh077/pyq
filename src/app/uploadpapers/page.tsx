import UploadPapers from '@/components/custom/UploadPapers'
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const page =async () => {
  const userId = await currentUser();
    const adminEmail = process.env.ADMIN_EMAILS;

    if(!adminEmail?.includes(userId?.primaryEmailAddress?.emailAddress as string)){
      redirect("/");
    }
  return (
    <div>
      <UploadPapers/>
    </div>
  )
}

export default page
