import { auth } from "./auth";
import { headers } from "next/headers";

export async function getSessionServer() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}
