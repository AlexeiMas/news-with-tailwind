import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {TNewsData} from "@/api/newsTypes";
import {receiveNews} from "@/api/newsApi";

export const useNews = (page: number, countPerPage?: number) => {
  return useQuery<TNewsData>({
    queryKey: ["news", page],
    queryFn: () => receiveNews(page, countPerPage),
    placeholderData: keepPreviousData,
  });
};