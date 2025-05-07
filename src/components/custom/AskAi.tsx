"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { subjectTypes } from "@/types"; // Verify this path
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { Copy } from "lucide-react";

const Askai = () => {
  const [question, setQuestion] = useState("");
  const [subject, setSubject] = useState<subjectTypes[] | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState<
    { question: string; answer: string }[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const responseContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get("/api/GetSubjectList");
        if (res.data.status === false) {
          throw new Error(res.data.msg);
        }
        setSubject(res.data.data);
      } catch (error) {
        toast.error("Failed to get subjects. Please refresh the page.");
      }
    };
    fetchSubjects();
  }, []);

  const handleSubjectChange = (subjectName: string) => {
    setSelectedSubject(subjectName);
  };

  const copyToClipboard = (text: string) => {
    // console.log(text)
    navigator.clipboard.writeText(text);
    toast.success("Answer copied to clipboard!");
  };

  const handleAskAI = async () => {
    if (!selectedSubject) {
      toast.error("Please select a subject");
      return;
    }
    if (!question.trim()) {
      toast.error("Please enter a question");
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.post("/api/ImptQuesAiResponse", {
        question: question.trim(),
        selectedSubject: selectedSubject.trim(),
      });

      if (res.data.status === false) {
        throw new Error("Failed to get response");
      }

      setAiResponse((prev) => [
        ...prev,
        { question: question.trim(), answer: res.data.data.content },
      ]);
      setQuestion("");
      inputRef.current?.focus();
    } catch (error) {
      toast.error("Failed to get response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (responseContainerRef.current) {
      responseContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [aiResponse]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="p-6 flex-grow ">
        <AnimatePresence>
          {aiResponse.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 max-w-4xl mx-auto"
              ref={responseContainerRef}
            >
             
              {aiResponse.map((res, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="flex justify-between items-start">
                    <p className="p-3 bg-black text-white rounded-md mb-4 font-semibold text-lg">
                      {res.question}
                    </p>
                    <button
                      onClick={() => copyToClipboard(res.answer)}
                      className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:cursor-pointer"
                      title="Copy answer"
                    >
                      <Copy size={20} />
                    </button>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, inline, className, children, ...props }: any) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={tomorrow}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                        h1: ({ children }) => (
                          <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-900 dark:text-gray-100">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-2xl font-semibold mt-5 mb-3 text-gray-800 dark:text-gray-200">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300">
                            {children}
                          </h3>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc pl-6 mb-4">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal pl-6 mb-4">{children}</ol>
                        ),
                        p: ({ children }) => (
                          <p className="mb-4 text-gray-700 dark:text-gray-300">
                            {children}
                          </p>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-gray-900 dark:text-gray-100">
                            {children}
                          </strong>
                        ),
                      }}
                    >
                      {res.answer}
                    </ReactMarkdown>
                  </div>
                  <hr className="my-6 border-gray-200 dark:border-gray-700" />
                </div>
              ))}
            </motion.div>
          ) : (
          <div className="text-3xl md:text-4xl lg:text-7xl flex justify-center items-center text-gray-500 mt-10 ">
            START SEARCH...
          </div>
          )}
        </AnimatePresence>
      </div>

      <div className="sticky bottom-0 left-0 w-full px-4 py-4 bg-white dark:bg-gray-900  z-50">
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto gap-4 items-center">
          <input
            type="text"
            className="flex-grow md:block w-full md:w-auto pl-4 pr-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-md focus:outline-none  bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Type your question. eg - List all the important questions."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            ref={inputRef}
            disabled={isLoading}
          />
          <div className="w-full md:w-48">
            <Select onValueChange={handleSubjectChange} disabled={isLoading}>
              <SelectTrigger className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {subject?.map((item: subjectTypes, index) => (
                    <SelectItem className="py-2" value={item.subject} key={index}>
                      {item.subject}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <button
            onClick={handleAskAI}
            className={`py-2 px-6 rounded-md hover:cursor-pointer text-white flex items-center  gap-2 ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black hover:bg-black"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                  />
                </svg>
                Loading...
              </>
            ) : (
              "Ask"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Askai;