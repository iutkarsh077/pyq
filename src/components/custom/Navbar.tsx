import { UploadCloud, FileText } from "lucide-react";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default async function Navbar() {
  const userId = await currentUser();

  const adminEmail1 = process.env.ADMIN_EMAIL1;
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ExamPaperHub</span>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-x-8">
         {
          userId && (
            <Link
            href="/"
            className="text-sm hover:scale-110 ease-in-out transition-all duration-200 font-medium hover:text-primary"
          >
            Home
          </Link>
          )
         }
          {adminEmail1 == userId?.primaryEmailAddress?.emailAddress && (
            <Link href="/uploadpapers">
              <UploadCloud className="hover:scale-110 ease-in-out transition-all duration-200 hover:cursor-pointer" />
            </Link>
          )}

          {userId ? (
            <UserButton />
          ) : (
            <>
              <SignedOut>
                <SignInButton>
                  <button className="bg-black py-1 px-5 rounded-sm font-semibold hover:cursor-pointer text-white">
                    Login
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn></SignedIn>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
