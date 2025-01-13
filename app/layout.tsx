import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      {/* <div className="w-full h-20 bg-red-400 p-4" > i am the lay out guy </div> */}
        {children}
        </body>
    </html>
  );
}