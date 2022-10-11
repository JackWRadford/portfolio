import { Tech } from "../enums/Tech";
import styles from "../styles/ProjectsList.module.css";
import Project from "../types/project";
import ProjectCard from "./ProjectCard";

const PROJECTS_LIST: Project[] = [
  {
    name: "Recipe sharing website",
    techList: [Tech.typeScript, Tech.nextJS],
    imagePath: "/tulip.jpg",
    githubURL: "",
    webURL: "",
  },
  {
    name: "Sudy timer website",
    techList: [Tech.typeScript, Tech.nextJS],
    imagePath: "/studytimer.png",
    githubURL: "",
    webURL: "https://studytimer.io/",
  },
  {
    name: "Turn - Reading Tracker app",
    techList: [Tech.dart, Tech.flutter],
    imagePath: "/turn.png",
    githubURL: "",
    webURL:
      "https://apps.apple.com/gb/app/turn-reading-tracker-timer/id1598741844",
  },
  {
    name: "Trait - Habit tracker app",
    techList: [Tech.dart, Tech.flutter],
    imagePath: "/trait.png",
    githubURL: "",
    webURL:
      "https://apps.apple.com/gb/app/trait-habit-tracker-streaks/id1616194863",
  },
];

const ProjectsList = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>PROJECTS</h2>
      <div className={styles.grid}>
        {PROJECTS_LIST.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
