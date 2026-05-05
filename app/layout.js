import "./globals.css";

export const metadata = {
  title: "The Golf Cart",
  description: "Central New York's first mobile golf trailer."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
