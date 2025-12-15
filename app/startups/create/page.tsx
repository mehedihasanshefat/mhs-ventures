import { redirect } from "next/navigation";
import StartupForm from "../_components/startup-form";

const CreateStartupPage = async () => {
  const session = true;

  if (!session) redirect("/");

  return (
    <>
      <section className="container mt-36 mb-20">
        <h1 className="mt-6 text-center text-4xl font-medium md:text-5xl lg:text-8xl">
          Submit Your Startup
        </h1>
      </section>

      <StartupForm />
    </>
  );
};

export default CreateStartupPage;
