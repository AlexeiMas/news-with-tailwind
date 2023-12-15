export const paginationResolver = (
  {
    totalCountData,
    countPerPage,
    currentPage,
    maxPagesDisplayed
  }: Record<"totalCountData" | "countPerPage" | "currentPage" | "maxPagesDisplayed", number>) => {
  const totalPages = Math.ceil(totalCountData <= 100 ? totalCountData / countPerPage : 100 / countPerPage);

  const pageNumbers: (number | string)[] = [];
  const maxPageItems = Math.min(totalPages, maxPagesDisplayed);

  // Calculate start and end indices based on the current page
  let start = Math.max(1, currentPage - Math.floor(maxPageItems / 2));
  let end = Math.min(totalPages, start + maxPageItems - 1);

  // Adjust start and end indices to always display maxPageItems
  start = Math.max(1, end - maxPageItems + 1);

  // Add ellipsis at the beginning if there are more pages before the displayed pages
  if (start > 1) {
    pageNumbers.push(1);
    if (start > 2) {
      pageNumbers.push("...");
    }
  }

  // Add page numbers within the display range
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  // Add ellipsis at the end if there are more pages after the displayed pages
  if (end < totalPages) {
    if (end < totalPages - 1) {
      pageNumbers.push('...');
    }
    pageNumbers.push(totalPages);
  }

  return pageNumbers;
};

export const normalizeDate = (date: string) => {
  const d = new Date(date);
  const currentYear = new Date().getFullYear();
  const showYear = d.getFullYear() === currentYear ? "" : ", " + currentYear;

  return d.toLocaleDateString("en-US", {day: "2-digit"})
    + " "
    + d.toLocaleDateString("en-US", {month: "short"})
    + showYear;
};

// Function to convert article title and publishedAt to slug
export const titleToSlugEncode = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with dash
    .replace(/[^\w-]+/g, ''); // Remove non-word characters except dash
};

export const decodeSlugToTitle = (slug: string) => {
  return decodeURI(slug.slice(0, slug.lastIndexOf("_")));
  // .replace(/-/g, ' ') // Replace dashes with spaces
  // .replace(/[^a-zA-Z0-9\s]/g, ''); // Remove non-word characters except spaces
};

export const generateSlug = (title: string, publishedAt: string) => {
  const formattedDate = new Date(publishedAt).toISOString().split('T')[0];
  const concatenatedString = `${title}_${formattedDate}`;

  return encodeURI(concatenatedString);
};

export const scrollToTopPage = (behavior: ScrollBehavior = "smooth") => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior,
  });
};

export const paginateData = <T>(array: T[], pageSize: number = 10) => {
  const totalDocs = array.length;
  const totalPages = Math.ceil(array.length / pageSize);

  return {
    totalDocs,
    totalPages,
    getPage(pageNumber: number) {
      const startIdx = (pageNumber - 1) * pageSize;
      const endIdx = pageNumber * pageSize;
      return array.slice(startIdx, endIdx);
    }
  };
};