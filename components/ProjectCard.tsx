import Image from "next/image";
import { FC, ReactElement } from "react";
import { Tech } from "../enums/Tech";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import styles from "../styles/ProjectCard.module.css";
import Project from "../types/project";
import { IconType } from "react-icons";

const getIcon = (tech: Tech): ReactElement<IconType> => {
  switch (tech) {
    case Tech.typeScript:
      return <SiTypescript />;
    case Tech.reactJS:
      return <SiReact />;
    case Tech.nextJS:
      return <SiNextdotjs />;
    case Tech.flutter:
      return <SiFlutter />;
    case Tech.dart:
      return <SiDart />;
    default:
      return <SiTypescript />;
  }
};

interface IProjectCardProps {
  project: Project;
}

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
  return (
    <a href={project.webURL} target="_blank" rel="noreferrer">
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
        <div className={styles.details}>
          <h2 className={styles.name}>{project.name}</h2>
          <div className={styles.techList}>
            {project.techList.map((tech) => getIcon(tech))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
