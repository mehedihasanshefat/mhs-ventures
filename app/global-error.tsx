"use client"; // Error boundaries must be Client Components
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body className="flex min-h-screen w-full flex-col items-center justify-center">
          <Card className="mx-auto max-w-md p-8 text-center">
            <CardTitle>Something went wrong!</CardTitle>
            <CardDescription>{error.message}</CardDescription>
            <Button onClick={() => reset()}>Try again</Button>
          </Card>
        </body>
      </ThemeProvider>
    </html>
  );
}
