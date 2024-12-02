import './globals.css';

export const metadata = {
  title: 'Portfolio v4',
  description: 'Personal Portfolio v4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
