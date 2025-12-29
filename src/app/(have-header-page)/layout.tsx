import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 路由组： 在当前文件夹下所有的页面都会显示header，并且嵌入了当前文件夹layout的children中
  return (
    <>
      <Header />
      {children}
    </>
  );
}
