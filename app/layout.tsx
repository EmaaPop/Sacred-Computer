import Providers from '@components/Providers';
export { metadata } from './metadata';
export const dynamic = 'force-static';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us">
      <body className="theme-light">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
