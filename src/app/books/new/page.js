import { Panel } from "@/components/Panel";
import { BookForm } from "@/features/books/BookForm";

export const metadata = {
  title: "새 책 기록 | 북로그",
};

export default function NewBookPage() {
  return (
    <Panel title="새 책 기록">
      <BookForm />
    </Panel>
  );
}
