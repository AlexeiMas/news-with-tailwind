import {TArticles} from "@/api/newsTypes.ts";
import {ImageSkeleton} from "@/components/Skeleton";
import ImageLayout from "@/components/ImageLayout.tsx";
import {Link} from "react-router-dom";
import {generateSlug, normalizeDate} from "@/helpers/libs.ts";

type TItemNewsProps = {
  data: TArticles
}

const ItemNews = ({data}: TItemNewsProps) => {
  return (
    <article className="grid grid-rows-[auto_1fr] gap-2 bg-black/5 dark:bg-black/20 rounded-lg p-2">
      <div className="h-56 overflow-hidden px-1">
        <h3 className="dark:text-white mb-3 text-gray-800 font-bold text-xl line-clamp-5">
          <Link to={"/" + generateSlug(data.title, data.publishedAt)}>
            {data.title}
          </Link>
        </h3>
        <p className="text-gray-700 dark:text-slate-400 line-clamp-3">{data.description}</p>
      </div>
      <div>
        <ImageLayout
          imgSrc={data.urlToImage}
          imgAlt={data.title}
          className={"w-full aspect-square opacity-80"}
        >
          <ImageSkeleton className="w-full aspect-square"/>
        </ImageLayout>
        <time className="text-gray-700 dark:text-slate-400 text-xs">{normalizeDate(data.publishedAt)}</time>
      </div>
    </article>
  );
};

export default ItemNews;