import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { headers } from "next/headers";
import { pathname } from "next-extra/pathname";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "ThreeJS Portfolio Project",
  description: "A developer portfolio",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const headerValues = headersList.values();
  const base = `${headers().get("x-forwarded-proto")}://${headers().get(
    "host"
  )}`;
  const fullUrl = new URL(pathname(), base); // e.g., http://localhost:3000/some/path?a=1&b=2

  console.log("ACTIVE PATH", { activePath, headerValues, fullUrl, base });

  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
        <div>What is pathname {activePath}</div>
        <div>What is header values {headerValues}</div>
        {children}
      </body>
    </html>
  );
}
