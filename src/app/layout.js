import "./globals.css";
import { GlobalLayout } from "@/components/layouts/GlobalLayout";

export const metadata = {
  title: "북로그",
  description: "읽은 책과 메모를 남기는 독서 기록장",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
