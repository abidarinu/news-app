export interface News {
  source: NewsSource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

export interface NewsSource {
  id: string | null;
  name: string;
}

export interface NewsData {
  status: string;
  totalResults: number;
  articles: Array<News>
}