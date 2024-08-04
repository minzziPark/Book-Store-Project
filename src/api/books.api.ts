import { Book, BookDetail } from "../models/book.model";
import { Pagination } from "../models/pagination.modal";
import { httpClient } from "./http";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  current_page?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    const response = await httpClient.get<FetchBooksResponse>("/books", {
      params: params,
    });
    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalItems: 0,
        currentPage: 1,
      },
    };
  }
};

export const fetchBook = async (bookId: string) => {
  try {
    const response = await httpClient.get<BookDetail>(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const likeBook = async (bookId: number) => {
  const response = await httpClient.post(`/likes/${bookId}`);
  return response.data;
};

export const unlikeBook = async (bookId: number) => {
  const response = await httpClient.delete(`/likes/${bookId}`);
  return response.data;
};
