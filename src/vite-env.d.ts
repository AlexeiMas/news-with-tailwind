/// <reference types="vite/client" />

interface ImportantMetaEnv {
  readonly VITE_API_KEY: string
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportantMetaEnv
}
