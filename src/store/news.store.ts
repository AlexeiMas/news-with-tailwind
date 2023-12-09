import {create} from "zustand";
import {TArticles} from "@/api/newsTypes.ts";
import {devtools, persist} from "zustand/middleware";

type TNewsStore = {
  list: TArticles[]
  setNews: (items: TArticles[]) => void
  getNewsByTitle: (title: string) => TArticles | undefined
  getRestrictedList: (title: string, limit?: number) => TArticles[]
}
export const useNewsStore = create<TNewsStore>()(devtools(
  persist((set, get) => ({
      list: [],
      setNews: (items) => set(({list}) => ({list: [...list, ...items]}), false, "setNews"),
      getNewsByTitle: (title) => get().list.find((item) => {
        return item.title.toLowerCase() === title.toLowerCase();
      }),
      getRestrictedList: (title, limit) => get().list.filter((item) =>
        item.title.toLowerCase() !== title.toLowerCase()
      ).slice(0, limit ?? 20)
    }),
    {name: "news-storage"}
  ),
  {name: "News"}
));

