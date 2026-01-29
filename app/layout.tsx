import './globals.css';

export const metadata = {
  title: 'Earnup - Earn Online',
  description: 'Professional earning platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
