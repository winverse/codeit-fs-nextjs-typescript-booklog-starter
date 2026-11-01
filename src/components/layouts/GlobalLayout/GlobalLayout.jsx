import Link from "next/link";
import { UserMenu } from "@/components/UserMenu";
import { AppProviders } from "@/providers";
import * as styles from "./GlobalLayout.css";

function GlobalLayout({ children }) {
  return (
    <AppProviders>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          북로그
        </Link>
        <nav className={styles.nav}>
          <Link href="/books/new" className={styles.newBookLink}>
            새 책 기록
          </Link>
          <UserMenu />
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
    </AppProviders>
  );
}

export default GlobalLayout;
