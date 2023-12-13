import {useMemo} from "react";
import cn from "classnames";
import {paginationResolver, scrollToTopPage} from "@/helpers/libs";

interface IPaginationProps {
  currentPage: number;
  totalCountData: number;
  onPageChange: (newPage: number) => void;
  countPerPage?: number;
  maxPagesDisplayed?: number;
}

const Pagination = (
  {
    currentPage,
    totalCountData,
    onPageChange,
    countPerPage = 10,
    maxPagesDisplayed = 5
  }: IPaginationProps) => {

  const listPages = useMemo(() => paginationResolver({
    countPerPage,
    currentPage,
    maxPagesDisplayed,
    totalCountData
  }), [totalCountData, currentPage]);

  const onPageChangeCB = (page: number) => {
    onPageChange(page);
    scrollToTopPage()
  };

  return (
    <div className="mt-20 mb-10 px-2">
      <ul className="flex items-center justify-center lg:justify-start max-w-screen-xl overflow-hidden">
        <li>
          <button
            className={cn("pagination-item rounded-l-lg", {"hover:bg-transparent pointer-events-none": currentPage === 1})}
            disabled={currentPage === 1}
            onClick={() => onPageChangeCB(currentPage - 1)}
          >Previous
          </button>
        </li>

        {listPages.map((page, index) => (
          <button
            key={index}
            onClick={() => (typeof page === "number" ? onPageChangeCB(page) : null)}
            className={cn("pagination-item", {
              "text-blue-500 hover:bg-blue-100 hover:text-blue-600 bg-gray-100 cursor-default transition-all duration-300 ease-linear": currentPage === page,
              "hover:bg-transparent pointer-events-none": typeof page === "string"
            })}
            disabled={typeof page === "string" || currentPage === page}
          >
            {page}
          </button>
        ))}

        <li>
          <button
            className={cn("pagination-item rounded-r-lg", {"hover:bg-transparent pointer-events-none": currentPage === listPages.at(-1)})}
            disabled={currentPage === listPages.at(-1)}
            onClick={() => onPageChangeCB(currentPage + 1)}
          >Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;