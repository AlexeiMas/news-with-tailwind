const apiLink = import.meta.env.VITE_API_URL

export const receiveNews = (page = 1, countPerPage = 10) => fetch(apiLink + `&q=bitcoin&pageSize=${countPerPage}&page=${page}`)
  .then((res) => res.json())