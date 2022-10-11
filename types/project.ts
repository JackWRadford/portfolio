import { Tech } from "../enums/Tech";

type Project = {
  name: string;
  techList: Tech[];
  imagePath: string;
  githubURL: string;
  webURL: string;
};
export default Project;
