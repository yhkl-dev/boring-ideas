import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { authOptions } from "@/lib/options";
import Provider from "./client-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boring ideas",
  description: "share and browse boring ideas",
  keywords: "boring ideas bored creative"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      {/* <Provider session={session}>{children}</Provider> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
