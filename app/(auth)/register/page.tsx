"use client";
import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import logo from "../../../public/images/mhs-ventures-logo.svg";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { GithubIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useTransition } from "react";
import { toast } from "sonner";

function RegisterPage() {
  const [socialPending, startSocialTransition] = useTransition();

  const registerWithGitHub = async () => {
    startSocialTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success(
              "Registration with Github successful. You're being redirected...",
            );
          },
          onError: (error) => {
            toast.success(error.error.message);
          },
        },
      });
    });
  };
  return (
    <Container className="flex min-h-screen items-center justify-center">
      <Card className="mx-auto w-full max-w-md border">
        <CardHeader className="flex flex-col items-center">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={100}
            className="h-9 w-auto"
          />
          <CardDescription className="sm:text-md font-semibold">
            Register your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            disabled={socialPending}
            onClick={registerWithGitHub}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full text-white",
            )}
          >
            {socialPending ? (
              <>
                Registering <Loader2 className="size-4 animate-spin" />
              </>
            ) : (
              <>
                Register with GitHub{" "}
                <GithubIcon className="size-4 text-white" />
              </>
            )}
          </Button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold underline underline-offset-2"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegisterPage;
