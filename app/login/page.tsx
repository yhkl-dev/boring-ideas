import type { NextRequest } from "next/server";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Login(req: NextRequest) {
  return (
    <div>
      <p>This is login page - public route</p>
      <Button onClick={() => signIn("github")}>Sign in with github</Button>
      <Button onClick={() => signIn("google")}>Sign in with google</Button>
    </div>
  );
}