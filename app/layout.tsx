import "@/app/ui/global.css"
import { inter } from '@/app/ui/fonts';

// TODO: Remove this file once we have a proper layout system in place.
export default function RootLayout({ children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
