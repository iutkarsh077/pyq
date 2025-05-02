"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PaperDataTypes } from "@/types";
import { Code } from "lucide-react";
function PaperCard({ paper }: { paper: PaperDataTypes }) {
  const handleDownload = ({ url }: { url: string }) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = paper.subject + paper.id.slice(0, 6);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="p-6 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="default">{paper.category}</Badge>
            <Badge variant="outline">{paper.year}</Badge>
          </div>
          <h3 className="font-semibold text-lg mb-2">{paper.subject}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {paper.university}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Code className="h-4 w-4" />
              <span>{paper.subjectCode}</span>
            </div>
          </div>
        </div>
        <div className="md:w-[200px] p-6 flex flex-row md:flex-col gap-4 justify-end items-center bg-muted/30">
        <div className="text-sm text-muted-foreground">
            <div className="flex items-center">
              <span className="text-black">Semester {paper.semester}</span>
            </div>
          </div>
          <Button
            onClick={() => handleDownload({ url: paper.pdfName })}
            size="sm"
            className="w-full"
          >
            Download
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default PaperCard;
