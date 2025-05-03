import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, UploadCloud, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ExamPaperHub</span>
        </div>


        {/* Mobile Menu */}
        <div className="flex items-center gap-x-8">
          <Link href="/" className="text-sm hover:scale-110 ease-in-out transition-all duration-200 font-medium hover:text-primary">Home</Link>
        <Link href="/uploadpapers">
            <UploadCloud className="hover:scale-110 ease-in-out transition-all duration-200 hover:cursor-pointer" />
          </Link>
         
        
        </div>
      </div>
    </header>
  )
}
