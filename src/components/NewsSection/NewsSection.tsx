import posts from "@/data/posts.json";
import {Pagination, PostCard} from "@/components/NewsSection";
import {useEffect, useId} from "react";
import {useNews} from "@/helpers/hooks/useNews";
import {TStatus} from "@/api/newsTypes";
import {useSearchParams} from "react-router-dom";
import {useNewsStore} from "@/store/news.store.ts";
import {ErrorAlert} from "@/components/Alert";
import {NewsListSkeleton} from "@/components/Skeleton";

const NewsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const {isLoading, isFetching, data} = useNews(page);
  const setNews = useNewsStore((state) => state.setNews);
  const id = useId();

  const onPageChange = (newPage: number = page) => {
    setSearchParams(newPage > 1 ? {page: "" + newPage} : {});
  };

  useEffect(() => {
    if (data) {
      setNews(data.articles);
    }
  }, [data, setNews]);

  if (isLoading || isFetching || !data) {
    return (
     <NewsListSkeleton countNews={10} />
    );
  }

  if (data.status === TStatus.error) {
    return (
      <ErrorAlert>
        {data.message}
      </ErrorAlert>
    );
  }

  return (
    <div className="w-full lg:w-2/3">
      <section className="px-2 flex flex-wrap">
        {
          data.articles.map((article) =>
            <PostCard key={article.publishedAt + id} article={article} avatar={posts[0].author.avatar}/>
          )
        }
      </section>
      <Pagination currentPage={page} totalCountData={data.totalResults} onPageChange={onPageChange}/>
    </div>
  );
};

export default NewsSection;