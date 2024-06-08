import { ComponentProps, FC } from "react";

import { twMerge } from "tailwind-merge";

export default function Main(props: ComponentProps<"main">) {
  return (
    <main {...props} className={twMerge("relative min-h-screen bg-neutral-950 text-neutral-100", props.className || "")}>
      {props.children}
    </main>
  );
}
