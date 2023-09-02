import { type FC } from "react"
import Image from "next/image"
import Badge from "@/components/ui/Badge"
import { buttonClasses } from "@/components/ui/Button"
import { Icons } from "@/components/ui/Icons"
import type { Project } from "@/config/projects"

interface ProjectCardProps {
  project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative flex w-full shrink-0 snap-center flex-col items-center justify-between gap-3 overflow-hidden rounded-md border border-transparent-white bg-glass-gradient pb-4 md:min-w-[510px] md:basis-[calc(42.66%-12px)] md:gap-5 ">
      <div className=" absolute right-2 top-0 z-20 mt-2 flex flex-wrap justify-end gap-2  md:mt-3 md:max-w-[360px]">
        <Badge>{project.mainBadge}</Badge>
        {project.badges.map((badge) => (
          <Badge key={badge} variant="secondary">
            {badge}
          </Badge>
        ))}
      </div>
      <div className="relative w-full shadow-secondary">
        <Image src={project.image} alt={project.title} width={510} height={286} className="aspect-video" priority />
        <div className="absolute inset-0 bg-glass-gradient" />
      </div>
      <div className="flex h-fit flex-col justify-between px-4">
        <h2 className="text-xl text-off-white md:text-2xl ">{project.title}</h2>
        <p className="mt-1 text-sm text-off-white/70 md:text-md">{project.description}</p>

        <div className="mt-4 flex w-full justify-end gap-3 ">
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
  )
}

export default ProjectCard
