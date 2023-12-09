import ImageSkeleton from "@/components/Skeleton/ImageSkeleton";

const PostCardSkeleton = () => {
  return (
    <div role={"status"} className="animate-pulse block w-full lg:grid lg:grid-cols-[12rem_auto] lg:gap-4 mb-10">
      <ImageSkeleton className={"aspect-square"}/>
      <div className="flex flex-col justify-between mt-4 md:mt-4 lg:mt-0">
        <div>
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 max-w-md"/>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-1"/>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-1 lg:max-w-lg"/>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-1"/>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full w-12 aspect-square bg-gray-100 dark:bg-gray-700"/>
          <div className="w-full">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px] mb-1"/>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;