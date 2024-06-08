import ContentWrapper from "@/shared/components/ContentWrapper";
import { Nextjs } from "@/shared/components/Icons";
import React from "@/shared/components/Icons/React";

export default function Skills() {
  return (
    <ContentWrapper element="section" className="relative pt-48">
      <h2 className="font-bebas-neue text-7xl md:text-8xl lg:text-9xl">Skills</h2>
      <p className="text-neutral-400 md:max-w-[453px]">
        From HTML, CSS, and JavaScript, to tools like React, Next.js, and Tailwind CSS, I utilize core web technologies to create outstanding digital experiences.
      </p>
      <ul className="mt-16 flex flex-wrap">
        {icons.map((icon, index) => (
          <SkillItem key={index} icon={icon} />
        ))}
      </ul>
    </ContentWrapper>
  );
}

const icons = [<Nextjs />, <React />];

const SkillItem = (props: { icon: React.ReactNode }) => {
  return <li className="flex h-[120px] w-[170px] items-center justify-center border border-mostard-300 text-mostard-100 md:h-[200px] md:w-[244px]">{props.icon}</li>;
};
