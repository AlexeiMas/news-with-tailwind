import posts from "@/data/posts.json";
import {Pagination, PostCard} from "@/components/NewsSection";
import {useId} from "react";
import {TArticles} from "@/api/newsTypes";
import {paginateData} from "@/helpers/libs.ts";

interface INewsSectionMockProps {
  articles: TArticles[];
  page: number;
  onPageChange: (newPage: number) => void;
}

const NewsSectionMock = ({articles, page, onPageChange}: INewsSectionMockProps) => {
  const id = useId();

  const {totalDocs, getPage} = paginateData<TArticles>(articles);
  const data = getPage(page);

  return (
    <div className="w-full lg:w-2/3">
      <section className="px-2 flex flex-wrap">
        {
          data.map((article) =>
            <PostCard key={article.publishedAt + id} article={article} avatar={posts[0].author.avatar}/>
          )
        }
      </section>
      <Pagination currentPage={page} totalCountData={totalDocs} onPageChange={onPageChange}/>
    </div>
  );
};

export default NewsSectionMock;