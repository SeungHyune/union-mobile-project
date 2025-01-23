"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Header } from "./_components";
import styles from "../_styles/error.module.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <main>
          <Header />
          <section className={styles.errorSection}>
            <h2>Oops, something went wrong!</h2>
            <article>
              <button className={styles.retry} onClick={() => reset()}>
                Try Again
              </button>
              <button
                className={styles.back}
                onClick={() => router.replace("/")}
              >
                Go to Homepage
              </button>
            </article>
          </section>
        </main>
      </body>
    </html>
  );
}
