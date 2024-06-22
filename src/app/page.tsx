"use client";

import { useActiveAccount } from "thirdweb/react";
import { LoginButton } from "./components/LoginButton";

export default function Home() {
  const account = useActiveAccount();
  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <LoginButton />
      </div>

      {account && (
        <div className="mt-12 text-center">
          You are logged in.{" "}
          <a href="/gated-content" className="underline">
            Go to the gated page
          </a>
        </div>
      )}
    </div>
  );
}