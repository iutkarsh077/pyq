"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { serachBoxOptions } from "@/lib/constant";
import { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import PaperCard from "./PaperCard";
import axios from "axios";

const ITEMS_PER_PAGE = 4;

const SearchBox = () => {
  const [searchWordsList, setSearchWordsList] = useState<any[]>([]);
  const [paginatedList, setPaginatedList] = useState<any[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearchWords = useDebounceCallback(setSearchWord, 500);

  useEffect(() => {
    async function searchObjectForPartialWord() {
      try {
        const res = await axios.post("/api/SearchPaperWords", {searchWord: searchWord.toLowerCase()});
        if (res.data.status === false || !res.data.data) throw new Error(res.data.msg);
        setSearchWordsList(res.data.data);
        setTotalPages(Math.ceil(res.data.data.length / ITEMS_PER_PAGE));
        setCurrentPage(1);
        setPaginatedList(res.data.data.slice(0, ITEMS_PER_PAGE));
      } catch (error) {
        console.log(error);
        setSearchWordsList([]);
        setPaginatedList([]);
        setTotalPages(0);
      }
    }
    if (searchWord.trim() !== "") {
      searchObjectForPartialWord();
    } else {
      setSearchWordsList([]);
      setPaginatedList([]);
      setTotalPages(0);
    }
  }, [searchWord]);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const start = (pageNumber - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setPaginatedList(searchWordsList.slice(start, end));
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchWord(value); 
    debouncedSearchWords(value); 
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Find Your Exam Papers
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Search by university, subject, year, or specific keywords
            </p>
          </div>
          <div className="w-full relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for exam papers..."
              value={searchWord}
              className="w-full pl-10 pr-20 py-4 sm:py-6 text-base"
              onChange={handleChangeText}
            />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              Search
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 hover:cursor-pointer justify-center">
            {serachBoxOptions.map((item, index) => (
              <Badge variant={item === searchWord ? "default" : "outline"} onClick={()=>setSearchWord(item)} key={index} className="text-sm">
                {item}
              </Badge>
            ))}
          </div>
          {searchWord && (
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6">
                {paginatedList.map((item: any, index: number) => (
                  <PaperCard key={index} paper={item} />
                ))}
              </div>
              {totalPages > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => goToPage(number)}
                      className={`w-8 h-8 rounded-full ${
                        currentPage === number
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
