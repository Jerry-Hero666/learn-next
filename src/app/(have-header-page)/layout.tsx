import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 验证是否提交commit
  return (
    <>
      <Header />
      {children}
    </>
  );
}
