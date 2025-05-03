import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { currentUser } from '@clerk/nextjs/server';

const Features = async () => {
    const userId = await currentUser();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Ace Your Finals?</h2>
          {
            userId ? (<p className="mx-auto max-w-2xl md:text-xl">
                Helped me crack my finals with confidence!” – A Final Year Student
              </p>) : ( <p className="mx-auto max-w-2xl md:text-xl">
            Sign up now to get unlimited access to our entire collection of final year exam papers.
          </p>)
          }
        </div>

      </div>
    </div>
  </section>
  )
}

export default Features
