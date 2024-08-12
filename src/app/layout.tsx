import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Page",
  description: "Studying React and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>

    
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-50">{children}</body>
  
    </html>
    </ReactQueryProvider>
  );
}
