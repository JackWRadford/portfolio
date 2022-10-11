import type { NextPage } from "next";
import ProjectsList from "../components/ProjectsList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.name}>JACK RADFORD</h1>
      <h1 className={styles.description}>
        I&apos;m a <span className={styles.highlight}>front-end</span> software
        developer, from Henley-on-Thames.
      </h1>
      <p className={styles.experience}>
        Experience building web apps with{" "}
        <span className={styles.highlight}>React</span>.js,{" "}
        <span className={styles.highlight}>Next</span>.js and{" "}
        <span className={styles.highlight}>TypeScript</span> and, building
        mobile apps with Flutter and Dart.
      </p>
      <ProjectsList />
    </div>
  );
};

export default Home;
