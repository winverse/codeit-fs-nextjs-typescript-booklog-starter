import { notFound } from "next/navigation";
import { getBook } from "@/lib/api";
import { Panel } from "@/components/Panel";
import { BookDetail } from "@/features/books/BookDetail";
import { MemoForm } from "@/features/memos/MemoForm";
import { MemoList } from "@/features/memos/MemoList";

export default async function BookPage({ params }) {
  const { id } = await params;
  const book = await getBook(id);
  if (!book) notFound();

  return (
    <>
      <BookDetail book={book} />
      <Panel title="메모">
        <MemoList bookId={book.id} />
        <MemoForm bookId={book.id} />
      </Panel>
    </>
  );
}
