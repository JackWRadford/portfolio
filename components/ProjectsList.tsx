import { Tech } from "../enums/Tech";
import styles from "../styles/ProjectsList.module.css";
import Project from "../types/project";
import ProjectCard from "./ProjectCard";

const PROJECTS_LIST: Project[] = [
  {
    name: "Recipe sharing website",
    techList: [Tech.typeScript, Tech.nextJS],
    imagePath: "/recipes.png",
    githubURL: "https://github.com/JackWRadford/recipes",
    webURL: "https://recipes-drab.vercel.app/",
  },
  {
    name: "Study timer website",
    techList: [Tech.typeScript, Tech.nextJS],
    imagePath: "/studytimer.png",
    githubURL: "https://github.com/JackWRadford/focus-timer",
    webURL: "https://studytimer.io/",
  },
  {
    name: "Turn - Reading tracker app",
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
    githubURL: "https://github.com/JackWRadford/habit-tracker",
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
