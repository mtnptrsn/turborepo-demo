"use client";

import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-2">
      <h1 className="text-2xl">This is the title</h1>
      <h2 className="text-2xl">This is the subtitle</h2>
      <h2 className="text-2xl">This is the subtitle</h2>
      <Button onClick={() => alert("Button was clicked")} label="Click Me" />
    </main>
  );
}
