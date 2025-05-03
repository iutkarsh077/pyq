"use client";
import { ChevronRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PaperCard from "@/components/custom/PaperCard"
import { useEffect,useState } from "react";
import { toast } from "sonner";
import { PaperDataTypes } from "@/types";
import Link from "next/link";
import axios from "axios";
import SearchBox from "./SearchBox";

const HomePage = () => {
    const [pyqPapers, setPYQPapers] = useState<PaperDataTypes[] | null>(null);

    useEffect(()=>{
        const getPyQPapers = async() =>{
            try {
                const res = await axios.get("/api/GetAllPapers");
                if(res.data.status === false){
                    // throw new Error(res.msg);
                    return;
                }
                if(res.data){
                    setPYQPapers(res.data.data);
                }
            } catch (error) {
                // console.log(error);
                // console.log("Error here")
                toast.error("Something went wrong");
            }
        }
        getPyQPapers();
    }, [])
  return (
    <main className="flex-1">
  <section className="w-full py-10 sm:py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              Final Year Exam Papers at Your Fingertips
            </h1>
            <p className="max-w-xl text-muted-foreground mx-auto lg:mx-0 md:text-xl">
              Access thousands of previous year question papers to ace your final exams. Download, study, and succeed.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row justify-center lg:justify-start">
            <Link href="#PaperSection">
              <Button size="lg" className="gap-1.5">
                Get Started <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
       
      </div>
    </div>
  </section>

  <p id="SeachPapers"><SearchBox/></p>

  <section className="w-full py-12 md:py-16 bg-muted/50">
    <div className="container px-4 md:px-6 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Browse by Category</h2>
        <p className="text-muted-foreground md:text-xl">Find papers organized by subject area</p>
      </div>
    </div>
  </section>

  <section id="PaperSection" className="w-full py-12 md:py-16">
    <div className="container px-4 md:px-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest Papers</h2>
        <p className="text-muted-foreground md:text-xl">Recently added exam papers from top universities</p>
      </div>
      <Tabs defaultValue="all" className="mt-8 w-full max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="engineering">Engineering</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
            <TabsTrigger value="arts">Arts & Humanities</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className="space-y-4">
          {pyqPapers?.slice(0, 4).map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </TabsContent>
        <TabsContent value="engineering" className="space-y-4">
          {pyqPapers?.filter((paper) => paper.category.toLowerCase() === "engineering").map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </TabsContent>
        <TabsContent value="arts" className="space-y-4">
          {pyqPapers?.filter((paper) =>
            paper.category.toLowerCase() === "arts" || paper.category.toLowerCase() === "humanities"
          ).map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </TabsContent>
        <TabsContent value="medical" className="space-y-4">
          {pyqPapers?.filter((paper) => paper.category.toLowerCase() === "medical").map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </TabsContent>
      </Tabs>
      <Link href="#SeachPapers" className="flex justify-center mt-8">
        <Button variant="outline" className="gap-2">
           Search Papers <Search className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  </section>

  <section className="w-full py-12 md:py-16 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold">10,000+</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Exam Papers</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold">500+</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Universities</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold">50+</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Subject Areas</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold">100K+</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Happy Students</p>
        </div>
      </div>
    </div>
  </section>

  <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Ace Your Finals?</h2>
          <p className="mx-auto max-w-2xl md:text-xl">
            Sign up now to get unlimited access to our entire collection of final year exam papers.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row justify-center">
          <Button size="lg" variant="secondary" className="gap-1.5">
            Sign Up Now <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default HomePage
