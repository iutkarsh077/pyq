import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, UploadCloud, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between md:px-10">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ExamPaperHub</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
          <Link href="/papers" className="text-sm font-medium hover:text-primary">Papers</Link>
          <Link href="/subject" className="text-sm font-medium hover:text-primary">Subjects</Link>
          <Link href="/universities" className="text-sm font-medium hover:text-primary">Universities</Link>
         
        </nav>

        <Link href="/uploadpapers" className="md:flex hidden">
            <UploadCloud className="hover:cursor-pointer" />
          </Link>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
        <Link href="/uploadpapers">
            <UploadCloud className="hover:cursor-pointer" />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-6">
                <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
                <Link href="/papers" className="text-sm font-medium hover:text-primary">Papers</Link>
                <Link href="/subject" className="text-sm font-medium hover:text-primary">Subjects</Link>
                <Link href="/universities" className="text-sm font-medium hover:text-primary">Universities</Link>
               
                {/* <Button variant="outline" size="sm" className="w-full">Log in</Button>
                <Button size="sm" className="w-full">Sign up</Button> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
