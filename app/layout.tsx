import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Omnisoft Dashboard',
  description: 'Build Dashbord including customers, invoices, insights with #Postgres and NextJs, Tailwind, Typescript. Using CI/CD with Vercel in deployment ',
  metadataBase: new URL('https://nextjs-dashboard-liard-chi.vercel.app/'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
