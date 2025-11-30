"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function useSignOut() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  // Combined state: true while request OR transition is happening
  const isProcessing = isLoading || isPending;

  async function signOut() {
    setIsLoading(true);

    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed out successfully");
            startTransition(() => {
              router.push("/login"); // redirect after success
            });
          },
          onError: (error) => {
            toast.error(error.error.message || "Failed to sign out");
          },
        },
      });
    } catch (error: any) {
      toast.error(error?.message || "Failed to sign out");
    } finally {
      setIsLoading(false); // request finished, transition may still be pending
    }
  }

  return {
    signOut,
    isProcessing, // single state to track entire sign-out process
  };
}
