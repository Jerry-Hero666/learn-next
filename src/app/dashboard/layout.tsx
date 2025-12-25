export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>我是 DashBoardLayout</div>
      {children}
    </div>
  );
}
