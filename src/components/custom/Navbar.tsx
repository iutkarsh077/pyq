import { Menu, UploadCloud, FileText } from "lucide-react";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default async function Navbar() {
  const userId = await currentUser();
  const adminEmail = process.env.ADMIN_EMAILS;
  const isAdmin = adminEmail?.includes(
    userId?.primaryEmailAddress?.emailAddress as string
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-lg md:text-xl font-bold">ExamPaperHub</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {userId && (
              <Link
                href="/"
                className="text-sm md:text-base font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
            )}
            <Link
              href="/ai"
              className="text-sm md:text-base font-medium hover:text-primary transition-colors"
            >
              AI
            </Link>
            {isAdmin && (
              <>
                <Link
                  href="/uploadpapers"
                  className="flex items-center gap-1 text-sm md:text-base font-medium hover:text-primary transition-colors"
                >
                  <span>Upload Papers</span>
                </Link>
                <Link
                  href="/DigitalQuestions"
                  className="text-sm md:text-base font-medium hover:text-primary transition-colors"
                >
                  UploadAI
                </Link>
              </>
            )}
          </nav>

          {/* User Authentication */}
          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignedOut>
              <SignInButton>
                <Button className="bg-black text-white px-4 py-2">Login</Button>
              </SignInButton>
            </SignedOut>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col ml-4  gap-4 mt-14">
                <Link
                  href="/"
                  className="text-base font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>

                <Link
                  href="/ai"
                  className="text-base font-medium hover:text-primary transition-colors"
                >
                  AI
                </Link>
                {isAdmin && (
                  <>
                    <Link
                      href="/uploadpapers"
                      className="flex items-center gap-2 text-base font-medium hover:text-primary transition-colors"
                    >
                      <span>Upload Papers</span>
                    </Link>
                    <Link
                      href="/DigitalQuestions"
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      UploadAI
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
