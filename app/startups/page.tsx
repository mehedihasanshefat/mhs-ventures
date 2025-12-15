import { prisma } from "@/lib/db";
import StartupCard from "./_components/startup-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";

type StartupsPageProps = {
  searchParams?: Promise<{
    q?: string | string[];
  }>;
};

const StartupsPage = async ({ searchParams }: StartupsPageProps) => {
  const params = await searchParams;
  const query = typeof params?.q === "string" ? params.q.trim() : undefined;

  const startups = await prisma.startup.findMany({
    where: query
      ? {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
          ],
        }
      : undefined,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  // className="mx-auto max-w-7xl space-y-8 px-4 py-10"

  return (
    <Container className="flex flex-col items-center space-y-8 px-4 py-10">
      <h1 className="text-center text-3xl font-bold">All Startups</h1>

      <form className="flex gap-2">
        <Input
          name="q"
          defaultValue={query}
          placeholder="Search startups..."
          className="max-w-md"
        />
        <Button type="submit">Search</Button>
      </form>

      {startups.length === 0 ? (
        <p className="text-muted-foreground">No startups found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {startups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default StartupsPage;
