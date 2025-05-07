"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import axios from "axios"

export default function DigitalQuestions() {
  const [subject, setSubject] = useState("")
  const [questions, setQuestions] = useState<string | null>(null);
 


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ subject, questions })
   try {
    const res = await axios.post("/api/CreateDigitalQuestions", { questions, subject });
    if(res.data.status === false){
        throw new Error(res.data.msg);
    }

    toast.success("Saved question successfully");
    setQuestions(null);
    setSubject("");
   } catch (error) {
    // console.log(error);
    toast.error("Failed to save questions");
   }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto max-h-fit">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Create Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject Name</Label>
            <Input
              id="subject"
              placeholder="Enter subject name"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Questions</h3>
            </div>

            <Textarea
                  placeholder="Enter your question here"
                  onChange={(e: any) => setQuestions(e.target.value)}
                  required
                  className="min-h-[200px]"
                />
          </div>
        </CardContent>
        <CardFooter className="mt-4">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
