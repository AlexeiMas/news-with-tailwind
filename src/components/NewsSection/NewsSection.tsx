import posts from "@/data/posts.json";
import {Pagination, PostCard} from "@/components/NewsSection";
import {useId} from "react";

const NewsSection = () => {
  const id = useId();

  return (
    <div className="w-full lg:w-2/3">
      <section className="px-2 flex flex-wrap">
        {
          posts.map((post, i) =>
            <PostCard key={i + id} post={post}/>
          )
        }
      </section>
      <Pagination/>
    </div>
  );
};

export default NewsSection;