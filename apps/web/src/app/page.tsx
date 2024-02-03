"use client";

import { Button } from "@repo/ui/button";
import { add } from "@repo/lib/add";
import { subtract } from "@repo/lib/subtract";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-2">
      <h1 className="text-2xl">This is the title</h1>
      <Button onClick={() => alert("Button was clicked")} label="Click Me" />
      <div>2 + 2 is {add(2, 2)}</div>
      <div>2 - 2 is {subtract(2, 2)}</div>
      <div>4 - 2 is {subtract(4, 2)}</div>
    </main>
  );
}
