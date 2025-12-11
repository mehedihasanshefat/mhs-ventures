"use client";

import { useEffect } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Card className="mx-auto w-full max-w-md text-center">
        <CardTitle>Something went wrong 💥</CardTitle>
        <CardDescription>{error.message}</CardDescription>
        <Button onClick={() => reset()} className="mx-auto mt-4 w-fit">
          Try again
        </Button>

        <Link
          href="/"
          className="hover:text-primary mx-auto w-fit underline underline-offset-2"
        >
          Return to home
        </Link>
      </Card>
    </div>
  );
}
