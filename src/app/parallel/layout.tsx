import ParallelHeader from "@/components/parallelHeader";

export default function RootLayout({
  children,
  team,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto">
      <ParallelHeader />
      <div className="flex gap-6">
        {team}
        {analytics}
      </div>
      {children}
    </div>
  );
}
