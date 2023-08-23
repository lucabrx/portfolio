import Image from "next/image";
import { type FC } from "react";

import type { Project } from "@/config/projects";

import Badge from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative flex w-full shrink-0 snap-center flex-col items-center justify-between overflow-hidden rounded-md border border-transparent-white bg-glass-gradient md:basis-[calc(42.66%-12px)] md:min-w-[510px] gap-3 md:gap-5 pb-4 ">
      <div className=" flex flex-wrap gap-2 mt-2 md:mt-3 absolute top-0 right-2 z-20  md:max-w-[360px] justify-end">
        <Badge>{project.mainBadge}</Badge>
        {project.badges.map((badge) => (
          <Badge key={badge} variant="secondary">
            {badge}
          </Badge>
        ))}
      </div>
      <div className="relative w-full shadow-secondary">
        <Image
          src={project.image}
          alt={project.title}
          width={510}
          height={286}
          className="aspect-video"
          priority
        />
        <div className="bg-glass-gradient absolute inset-0" />
      </div>
      <div className="px-4 flex flex-col justify-between h-fit">
        <h2 className="text-xl text-off-white md:text-2xl ">{project.title}</h2>
        <p className="text-sm text-off-white/70 mt-1 md:text-md">
          {project.description}
        </p>

        <div className="flex gap-3 w-full justify-end mt-4 ">
          <a
            href={project.github}
            className={buttonClasses({
              variant: "github",
              size: "md",
              className: "w-full md:w-auto md:px-6",
            })}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </a>
          <a
            href={project.link}
            className={buttonClasses({
              size: "md",
              variant: "primary",
              className: "w-full md:w-auto md:px-6",
            })}
          >
            Visit Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
