import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type StartupDetailsPageProps = {
  params: {
    id: string;
  };
};

const PLACEHOLDER_IMAGE = "https://placehold.co/1200x600?text=Startup+Image";

const StartupDetailsPage = async ({ params }: StartupDetailsPageProps) => {
  const startup = await prisma.startup.findUnique({
    where: { id: params.id },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  if (!startup) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10">
      {/* IMAGE */}
      <div className="relative h-[320px] w-full overflow-hidden rounded-3xl">
        <Image
          src={startup.link || PLACEHOLDER_IMAGE}
          alt={startup.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* HEADER */}
      <div className="space-y-4">
        <Badge variant="secondary">{startup.category}</Badge>

        <h1 className="text-3xl font-bold">{startup.title}</h1>

        <p className="text-muted-foreground">{startup.description}</p>
      </div>

      {/* CREATOR */}
      <Card className="rounded-2xl">
        <CardContent className="flex items-center gap-4 p-6">
          <Image
            src={startup.user.image || PLACEHOLDER_IMAGE}
            alt={startup.user.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-muted-foreground text-sm">Created by</p>
            <p className="font-medium">{startup.user.name}</p>
          </div>
        </CardContent>
      </Card>

      {/* PITCH */}
      <Card className="rounded-2xl">
        <CardContent className="p-6">
          <h2 className="mb-3 text-xl font-semibold">Startup Pitch</h2>

          <div className="prose dark:prose-invert max-w-none">
            {startup.pitch}
          </div>
        </CardContent>
      </Card>

      {/* ACTION */}
      <Button variant="outline" asChild>
        <Link href="/startups">← Back to Startups</Link>
      </Button>
    </div>
  );
};

export default StartupDetailsPage;
