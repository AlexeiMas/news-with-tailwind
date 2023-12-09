export type TNewsData = {
  articles: TArticles[]
  status: TStatus
  totalResults: number
  message?: string
}

export type TArticles = {
  author: string | null
  title: string
  description: string
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string
  source: {
    id: string | null
    name: string
  }
}

export enum TStatus {
  ok = "ok",
  error = "error"
}