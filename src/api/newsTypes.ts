export type TNewsData = {
  articles: TArticles[]
  status: EStatus
  totalResults: number
  message?: string
  code?: string
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

export enum EStatus {
  ok = "ok",
  error = "error"
}