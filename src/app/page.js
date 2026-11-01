import { getBooks } from "@/lib/api";
import { BookList } from "@/features/books/BookList";
import { StatusFilter } from "@/features/books/StatusFilter";

export default async function Home({ searchParams }) {
  const { status } = await searchParams;
  const books = await getBooks(status);

  return (
    <>
      <StatusFilter current={status} />
      <BookList books={books} />
    </>
  );
}
