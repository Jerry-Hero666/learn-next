export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="root-template">
      <div>我是 Template</div>
      {children}
    </div>
  );
}
