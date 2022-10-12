import Image from "next/image";
import { FC, ReactElement } from "react";
import { Tech } from "../enums/Tech";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiDart,
  SiGithub,
} from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";
import styles from "../styles/ProjectCard.module.css";
import Project from "../types/project";
import { IconType } from "react-icons";

const getIcon = (tech: Tech, index: number): ReactElement<IconType> => {
  switch (tech) {
    case Tech.typeScript:
      return <SiTypescript key={index} />;
    case Tech.reactJS:
      return <SiReact key={index} />;
    case Tech.nextJS:
      return <SiNextdotjs key={index} />;
    case Tech.flutter:
      return <SiFlutter key={index} />;
    case Tech.dart:
      return <SiDart key={index} />;
    default:
      return <SiTypescript key={index} />;
  }
};

interface IProjectCardProps {
  project: Project;
}

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          width={2000}
          height={2000}
          layout="responsive"
          alt={project.name}
          src={project.imagePath}
        />
      </div>
      {project.githubURL && (
        <a
          className={styles.github}
          href={project.githubURL}
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub /> GitHub
        </a>
      )}
      <a
        className={styles.details}
        href={project.webURL}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className={styles.name}>
          <AiOutlineLink />
          {project.name}
        </h2>
        <div className={styles.techList}>
          {project.techList.map((tech, index) => getIcon(tech, index))}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
