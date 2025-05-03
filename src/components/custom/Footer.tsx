import { PortfolioWebsite } from '@/lib/constant'
import { Github, Linkedin, Twitter, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">About</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Study Tips
                  </Link>
                </li>
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Copyright
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ExamPaperHub. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href={PortfolioWebsite} className="text-muted-foreground hover:text-foreground">
              <User />
              </Link>
              <Link href="https://www.linkedin.com/in/utkarsh-singh-9467aa257/" className="text-muted-foreground hover:text-foreground">
              <Linkedin />
              </Link>
              <Link href="https://github.com/iutkarsh077" className="text-muted-foreground hover:text-foreground">
              <Github />
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
