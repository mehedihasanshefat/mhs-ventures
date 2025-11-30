/* eslint-disable @next/next/no-html-link-for-pages */
// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body className="flex min-h-screen w-full flex-col items-center justify-center">
          <Card className="mx-auto max-w-md p-8 text-center">
            <CardTitle>404 - Page Not Found</CardTitle>
            <CardDescription>This page does not exist.</CardDescription>
            <a href="/" className={buttonVariants({ variant: "outline" })}>
              Return Home
            </a>
          </Card>
        </body>
      </ThemeProvider>
    </html>
  );
}
