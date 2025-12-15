import { redirect } from "next/navigation";
import StartupForm from "../_components/startup-form";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const CreateStartupPage = async () => {
  const session = true;

  if (!session) redirect("/");

  return (
    <>
      <section className="relative container mb-20">
        <Link
          href="/"
          className={buttonVariants({
            variant: "default",
            className: "absolute -top-4 left-4 z-20 self-start",
          })}
        >
          Go to home
        </Link>
        <h1 className="mt-36 text-center text-4xl font-medium md:text-5xl lg:text-8xl">
          Submit Your Startup
        </h1>
      </section>

      <StartupForm />
    </>
  );
};

export default CreateStartupPage;
