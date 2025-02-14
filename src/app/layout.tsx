import { Roboto } from "next/font/google";
import "@/app/globals.css";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["100", "300", "700", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
