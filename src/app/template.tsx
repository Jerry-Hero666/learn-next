export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-red-500 root-template">
      <div>我是 Template</div>
      {children}
    </div>
  );
}
