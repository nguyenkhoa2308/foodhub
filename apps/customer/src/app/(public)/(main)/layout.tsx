import MainHeader from "~/components/layout/MainHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <MainHeader />
      {children}
    </main>
  );
}
