import {TArticles} from "@/api/newsTypes";
import {generateSlug, normalizeDate} from "@/helpers/libs";
import {Link} from "react-router-dom";
import {ImageSkeleton} from "@/components/Skeleton";
import ImageLayout from "@/components/ImageLayout.tsx";

type TPostCardProps = {
  article: TArticles
  avatar?: string
}
const PostCard = ({article, avatar}: TPostCardProps) => {

  return (
    <Link
      className="block w-full lg:grid lg:grid-cols-[12rem_auto] lg:gap-4 mb-10"
      to={generateSlug(article.title, article.publishedAt)}
    >
      <ImageLayout
        imgSrc={article.urlToImage}
        imgAlt={article.title}
        className={"w-full h-48 lg:w-48 opacity-80"}
      >
        <ImageSkeleton className="w-full lg:w-48 lg:mr-4 aspect-square"/>
      </ImageLayout>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="dark:text-white mb-2 text-gray-700 font-bold text-2xl">{article.title}</h3>
          <p className="text-gray-700 dark:text-slate-400">{article.description}</p>
        </div>
        <div className="flex gap-x-2 mt-3">
          <ImageLayout
            imgSrc={avatar ?? null}
            imgAlt={"author"}
            className={"h-10 w-10 lg:w-10 lg:mr-0 rounded-full"}
          >
            <ImageSkeleton className="h-10 w-10 lg:w-10 lg:mr-0 rounded-full" watermark={false}/>
          </ImageLayout>
          <div>
            <p className="font-semibold text-gray-400 text-sm">{article.author ?? '\u00A0'}</p>
            <time className="text-gray-400 text-xs">{normalizeDate(article.publishedAt)}</time>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;