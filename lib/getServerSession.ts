import { auth } from "./auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

export const getServerSession = async () => {
  return await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
};
