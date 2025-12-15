"use server";

import { formSchema } from "../validation";
import { getServerSession } from "../getServerSession";
import { prisma } from "../db";

type CreateStartupFormState = {
  errors: {
    title?: string[];
    category?: string[];
    link?: string[];
    pitch?: string[];
    description?: string[];
    _form?: string[];
  };
};

export const createStartup = async (
  _prevState: CreateStartupFormState,
  formData: FormData,
): Promise<CreateStartupFormState> => {
  const validation = formSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    link: formData.get("link"),
    pitch: formData.get("pitch"),
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const session = await getServerSession();

  if (!session?.user?.id) {
    return {
      errors: {
        _form: ["You must be logged in"],
      },
    };
  }

  try {
    await prisma.startup.create({
      data: {
        ...validation.data,
        userId: session.user.id,
      },
    });

    return { errors: {} };
  } catch (err) {
    console.error(err);
    return {
      errors: {
        _form: ["Something went wrong"],
      },
    };
  }
};
