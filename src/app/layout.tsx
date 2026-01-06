import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="font-pretendard">
      <body>{children}</body>
    </html>
  );
}
