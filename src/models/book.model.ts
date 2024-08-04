export interface Book {
  id: number;
  title: string;
  img: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  pubDate: string;
  category_id: number;
  likes: number;
}

export interface BookDetail extends Book {
  category_name: string;
  liked: boolean;
}
