import Main from "@/shared/components/Main";
import * as Sections from "./_pageResources/sections";

export default function Home() {
  return (
    <Main>
      <Sections.Skills />
      <Sections.Exp />
    </Main>
  );
}
