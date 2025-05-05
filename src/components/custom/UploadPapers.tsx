"use client";
import NewPdfForm, { PdfFormType } from "@/types/ExamPdfForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { categories, year } from "@/lib/constant";

const UploadPapers = () => {
  const [isPdfUploaded, setIsPdfUploaded] = useState(false);
  const [myPdfName, setMyPdfName] = useState<string | null>("");
  const form = useForm<PdfFormType>({
    resolver: zodResolver(NewPdfForm),
    defaultValues: {
      pdfName: "",
      university: "",
      subject: "",
      subjectCode: "",
      category: "",
      year: 1990,
      semester: 0,
      department: "",
    },
  });

  const handlePaperPdf = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file?.type !== "application/pdf") {
      toast.warning("File is not a PDF", {
        duration: 2000,
      });

      return;
    }

    try {
      const pdfName = Math.floor(Math.random() * 10000) + file.name;
      const res = await axios.post("/api/awsfile", {
        name: pdfName,
        type: file.type,
      });

      if (res.data.status === false || res.data.data === null) {
        throw new Error(res.data.msg);
      }

      const signedUrl = res.data.data;

       const resAWS = await axios.put(signedUrl, file, {
            headers: {
              "Content-Type": "application/pdf",
            },
          });

          if(res.statusText != "OK"){
            throw new Error("Failed to upload")
          }


      setIsPdfUploaded(true);
      setMyPdfName(pdfName);
    } catch (error) {
      // console.log(error);
      toast.error("Failed to upload PDF");
    }
  };

  const onSubmit = async (data: PdfFormType) => {
    if(isPdfUploaded === false){
      toast.error("PDF File is required");
    }

    if(!myPdfName){
      console.log("error");
      return;
    }
    if (data.semester <= 0) {
      toast.warning("Semester is not less then or equal to Zero");
      return;
    }
    data.pdfName = myPdfName;
    try {
      const res = await axios.post("/api/CreatePYQ", data);
      if (res.data.status === false) {
        throw new Error(res.data.msg);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    toast.success("Form submitted successfully");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Upload Exam Papers
      </h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload PDF
        </label>
        <Input
          placeholder="Upload PDF Only"
          type="file"
          onChange={handlePaperPdf}
        />
        {isPdfUploaded && (
          <p className="text-sm text-green-600 mt-2">
            PDF uploaded successfully
          </p>
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="university"
            render={({ field }) => (
              <FormItem>
                <FormLabel>University</FormLabel>
                <FormControl>
                  <Input placeholder="University" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subjectCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject Code</FormLabel>
                <FormControl>
                  <Input placeholder="Subject Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {categories.map((item, index) => (
                        <SelectItem value={item} key={index}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <Select
                  onValueChange={val =>field.onChange(Number(val))}
                  defaultValue={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Year" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {year.map((item, index) => (
                        <SelectItem value={item.toString()} key={index}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="semester"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Semester</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Semester"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <Input placeholder="Department" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UploadPapers;
