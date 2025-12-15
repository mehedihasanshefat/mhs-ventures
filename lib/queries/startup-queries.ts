import { prisma } from "../db";

export const getStartups = async () => {
  return await prisma.startup.findMany({
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
};

export const getStartupById = async (id: string) => {
  return prisma.startup.findUnique({
    where: { id },
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
};
