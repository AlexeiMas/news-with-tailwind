import {PaginationSkeleton, PostCardSkeleton} from "@/components/Skeleton/index.ts";
import {useMemo} from "react";

type TNewsListSkeletonProps = {
  countNews?: number
}

const NewsListSkeleton = ({countNews = 10}: TNewsListSkeletonProps) => {
  const list = useMemo(() => {
    return Array.from({length: countNews}, (_, i) => (<PostCardSkeleton key={i}/>));
  }, [countNews]);

  return (
    <div className="w-full lg:w-2/3">
      <section className="px-2 flex flex-wrap">
        {list}
      </section>
      <PaginationSkeleton/>
    </div>
  );
};

export default NewsListSkeleton;