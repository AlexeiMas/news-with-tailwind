import {useNewsStore} from "@/store/news.store.ts";
import ItemNews from "@/components/RecentUpdates/ItemNews.tsx";
import {useShallow} from "zustand/react/shallow";

const ListNews = ({title}: Record<"title", string>) => {
  const getRestrictedList = useNewsStore(useShallow(state => state.getRestrictedList));
  const list = getRestrictedList(title);

  return (
    <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-4">
      {
        list.map((item) => (
          <ItemNews data={item} key={item.title + item.publishedAt}/>
        ))
      }
    </article>
  );
};

export default ListNews;