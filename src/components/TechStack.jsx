import { ReactLogo } from './icons/ReactLogo';
import { NodeLogo } from './icons/NodeLogo';
import { MongodbLogo } from './icons/MongodbLogo';
import { JestLogo } from './icons/JestLogo';
import { GitLogo } from './icons/GitLogo';
import { Html5Logo } from './icons/Html5Logo';
import { Css3Logo } from './icons/Css3Logo';
import { PostgreSqlLogo } from './icons/PostgreSqlLogo';

export const TechStack = () => {
  return (
    <main className="project-wrapper">
      <h1 className="project-title">Technologies</h1>
      <p className="project-summary">
        Technologies are ever-changing and as I learn, I’m discovering new ways to leverage those
        that are available based on the demands of a project or sprint.
      </p>
      <p className="project-summary">
        Though relatively early in my tech career, I have been exposed to a good range of
        technologies and even developed a working knowledge in a number of industry standard
        technologies and frameworks through my time at Northcoders and personal projects that I have
        worked on.
      </p>
      <p className="project-summary">Technologies that I can approach with confidence include...</p>

      <section className="project-stack-wrapper">
        <h3 className="section-heading">Tech Stack</h3>
        <div className="project-logo-list">
          <div className="project-logo-wrapper">
            <ReactLogo />
            <p>React/React Native</p>
          </div>
          <div className="project-logo-wrapper">
            <NodeLogo />
            <p>Node JS</p>
          </div>
          <div className="project-logo-wrapper">
            <MongodbLogo />
            <p>Mongo DB</p>
          </div>
          <div className="project-logo-wrapper">
            <PostgreSqlLogo />
            <p>PostgreSQL</p>
          </div>
          <div className="project-logo-wrapper">
            <JestLogo />
            <p>Jest</p>
          </div>
          <div className="project-logo-wrapper">
            <GitLogo />
            <p>Git</p>
          </div>
          <div className="project-logo-wrapper">
            <Html5Logo />
            <p>HTML 5</p>
          </div>
          <div className="project-logo-wrapper">
            <Css3Logo />
            <p>CSS 3</p>
          </div>
        </div>
      </section>
    </main>
  );
};
