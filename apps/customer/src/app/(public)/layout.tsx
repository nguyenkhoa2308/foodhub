"use client";

import Footer from "~/components/layout/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      {children}
      <Footer />
    </main>
  );
}
