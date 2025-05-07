import DigitalQuestions from "@/components/custom/DigitalQuestions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const userId = await currentUser();
      const adminEmail = process.env.ADMIN_EMAILS;
  
      if(!adminEmail?.includes(userId?.primaryEmailAddress?.emailAddress as string)){
        redirect("/");
      }
  return (
    <div>
      <div className="text-6xl flex justify-center items-center pt-5">
        Upload Questions here
      </div>
      <div className="min-h-screen flex  justify-center pt-10">
        <DigitalQuestions />
      </div>
    </div>
  );
};

export default page;
