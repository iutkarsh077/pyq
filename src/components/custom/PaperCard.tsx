"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PaperDataTypes } from "@/types";
import { Code } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import axios from "axios";

function PaperCard({ paper }: { paper: PaperDataTypes }) {
  const [pdfUrl, setPdfUrl] = useState<string>(paper.pdfName);
  useEffect(()=>{
    const fetchSignedAWSUrlPDF = async () =>{
      try {
        const res = await axios.post("/api/GetAWSPdf", {
          pdfName: paper.pdfName
        })

        if(res.data.status === false){
          // console.log("error")
          throw new Error(res.data.msg);
        }

        // console.log({name: paper.pdfName, url: res.data.url});
        setPdfUrl(res.data.url)
      } catch (error) {
        toast.error("Error while getting PDF");
      }
    }
    fetchSignedAWSUrlPDF();
  }, [paper])

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
  
      const blobUrl = window.URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = paper.subject + paper.id.slice(0, 6) + ".pdf";
      document.body.appendChild(link);
      link.click();
  
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      // console.error("Download failed:", error);
      toast.error("Failed to download the PDF. Please try again.");
    }
  };
  return (
    <Card className="overflow-hidden">
  <div className="flex flex-col md:flex-row">
    <div className="p-4 sm:p-6 flex-1">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <Badge variant="default">{paper.category}</Badge>
        <Badge variant="outline">{paper.year}</Badge>
      </div>
      <h3 className="font-semibold text-base sm:text-lg mb-2">
        {paper.subject}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {paper.university}
      </p>
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Code className="h-4 w-4" />
          <span>{paper.subjectCode}</span>
        </div>
      </div>
    </div>

    <div className="w-full md:w-[200px] border-t md:border-t-0 md:border-l border-muted p-4 sm:p-6 flex flex-col gap-4 justify-center items-center bg-muted/30">
      <div className="text-sm text-muted-foreground">
        <span className="text-black">Semester {paper.semester}</span>
      </div>
      <Link
      href={pdfUrl}
      target="_blank"
        className="w-full px-5 py-1 bg-white text-black border-black border-2 text-center text-sm rounded-md"
      >
        View
      </Link>
      <Button
        onClick={handleDownload}
        size="sm"
        className="w-full hidden xl:block hover:cursor-pointer"
      >
        Download
      </Button>
    </div>
  </div>
</Card>

  );
}

export default PaperCard;
