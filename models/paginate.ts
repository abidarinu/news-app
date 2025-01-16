export interface Paginate<T> {
  status: string;
  totalResults: number;
  articles: Array<T>
}