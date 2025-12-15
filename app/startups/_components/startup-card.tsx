"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type StartupAuthor = {
  id: string;
  name: string;
  image?: string | null;
};

export type StartupCardData = {
  id: string;
  title: string;
  description: string;
  category: string;
  link?: string | null; // 👈 image URL
  user: StartupAuthor;
};

type StartupCardProps = {
  startup: StartupCardData;
};

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400?text=Startup+Image";

const AVATAR_PLACEHOLDER = "https://placehold.co/64x64?text=User";

const StartupCard = ({ startup }: StartupCardProps) => {
  return (
    <Card className="overflow-hidden rounded-2xl">
      {/* IMAGE (startup image, not redirect) */}
      <div className="relative h-48 w-full">
        <Image
          src={startup.link || PLACEHOLDER_IMAGE}
          alt={startup.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <CardContent className="space-y-4 p-5">
        {/* CATEGORY */}
        <Badge variant="secondary" className="w-fit">
          {startup.category}
        </Badge>

        {/* TITLE */}
        <h3 className="line-clamp-1 text-lg font-semibold">{startup.title}</h3>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground line-clamp-3 text-sm">
          {startup.description}
        </p>

        {/* USER */}
        <div className="flex items-center gap-3 pt-2">
          <Image
            src={startup.user.image || AVATAR_PLACEHOLDER}
            alt={startup.user.name}
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span className="text-sm font-medium">{startup.user.name}</span>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full">
          <Link href={`/startups/${startup.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StartupCard;
