import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leo Palmeiro | Fullstack Engineer',
  description: 'Leo Palmeiro portfolio with technologies and contact form.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
