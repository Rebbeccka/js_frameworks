"use client";

import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a loading state or null while waiting for client-side hydration
  if (!mounted) {
    return (
      <html lang="en">
        <body>
          <div>Loading...</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
