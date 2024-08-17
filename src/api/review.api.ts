import { BookReviewItem, BookReviewItemWrite } from "@/models/book.model";
import { requestHandler } from "./http";

// 모킹서버 이용
export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem>("get", `/review/${bookId}`);
};

interface AddBookReviewResponse {
  message: string;
}

export const addBookReview = async (
  bookId: string,
  data: BookReviewItemWrite
) => {
  return await requestHandler<AddBookReviewResponse>(
    "post",
    `/review/${bookId}`
  );
};
