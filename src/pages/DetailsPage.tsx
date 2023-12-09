import {useNewsStore} from "@/store/news.store.ts";
import {Link, useLocation} from "react-router-dom";
import {decodeSlugToTitle, normalizeDate} from "@/helpers/libs.ts";
import ImageSkeleton from "@/components/Skeleton/ImageSkeleton.tsx";
import {ErrorWithHomeLink} from "@/components/Alert";
import ImageLayout from "@/components/ImageLayout.tsx";
import RecentUpdatesSection from "@/components/RecentUpdates/RecentUpdatesSection.tsx";
import ListNews from "@/components/RecentUpdates/ListNews.tsx";
import {useShallow} from "zustand/react/shallow";

const DetailsPage = () => {
  const {pathname} = useLocation();
  const title = decodeSlugToTitle(pathname.slice(pathname.lastIndexOf("/") + 1));
  const getNewsByTitle = useNewsStore(useShallow(state => state.getNewsByTitle));
  const detailsInfoByTitle = getNewsByTitle(title);

  if (!detailsInfoByTitle) {
    return (
      <ErrorWithHomeLink/>
    );
  }

  return (
    <div>
      <div className="grid lg:grid-cols-[50%_auto] gap-2">
        <ImageLayout
          imgSrc={detailsInfoByTitle.urlToImage}
          imgAlt={detailsInfoByTitle.title}
          className={"w-full opacity-80"}
        >
          <ImageSkeleton className={"w-full lg:mr-4 h-[400px] animate-pulse"}/>
        </ImageLayout>
        <div className="h-full flex flex-col justify-between px-2">
          <h1 className="dark:text-white mb-2 text-gray-700 font-bold text-3xl">{detailsInfoByTitle.title}</h1>
          <div className="flex justify-between items-end">
            <div>
              <div
                className="text-gray-500 dark:text-gray-300 text-xs my-4 lg:my-0 italic">{"#" + detailsInfoByTitle.source.name}</div>
              <time className="text-gray-400 text-xs">{normalizeDate(detailsInfoByTitle.publishedAt)}</time>
            </div>
            <p className="font-semibold text-gray-400 text-xs">{detailsInfoByTitle.author ?? '\u00A0'}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between px-2 mt-7">
        <p className="text-gray-700 dark:text-slate-400">{detailsInfoByTitle.description}</p>
        <div className="text-gray-400 text-xs mt-8">
          Source:
          <Link
            className="ml-2 text-indigo-500 dark:text-indigo-300 hover:underline"
            to={detailsInfoByTitle.url}
            relative={"path"}
            target={"_blank"}
          >{detailsInfoByTitle.url}</Link>
        </div>
      </div>

      <hr className="my-8"/>

      <RecentUpdatesSection>
        <ListNews title={title}/>
      </RecentUpdatesSection>
    </div>
  );
};

export default DetailsPage;