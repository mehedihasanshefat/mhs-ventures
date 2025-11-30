import { authClient } from "./auth-client";

export function getSessionClient() {
  return authClient.useSession();
}
