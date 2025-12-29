
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto">
      {children}
      {modal}
    </div>
  );
}
