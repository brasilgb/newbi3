import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { AuthProvider } from "@/contexts/authcontext";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased font-roboto`}
      >
        <main>
          <AuthProvider>
            {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
