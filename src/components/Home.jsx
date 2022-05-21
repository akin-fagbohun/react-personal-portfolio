import { Html5Logo } from './icons/Html5Logo';
import { GitLogo } from './icons/GitLogo';
import { Css3Logo } from './icons/Css3Logo';
import { NodeLogo } from './icons/NodeLogo';
import { ReactLogo } from './icons/ReactLogo';

export const Home = () => {
  return (
    <main>
      <section className="headline-wrapper">
        <div className="headline-content">
          <h1>Hello, I&apos;m Akin. A Leeds based Front-end/Full-Stack developer.</h1>
          <p>Welcome to my personal portfolio... Please take a look around.</p>
        </div>
      </section>
      <section className="project-wrapper">
        <h3 className="section-heading">Projects</h3>
        <ul className="project-carousel">
          <li className="project-card">
            <div className="card-content">
              <h3>Everything News</h3>
              <p>A static article site, built with React</p>
              <div className="card-cta"></div>
            </div>
          </li>
          <li className="project-card">
            <div className="card-content">
              <h3>REST API</h3>
              <p>A REST API, built with Node, Express and PostgreSQL.</p>
              <div className="card-cta"></div>
            </div>
          </li>
          <li className="project-card">
            <div className="card-content">
              <h3>OddJobs Mobile App</h3>
              <p>A mobile app, built with React Native.</p>
              <div className="card-cta"></div>
            </div>
          </li>
        </ul>
      </section>
      <section className="stack-wrapper">
        <h3 className="section-heading">Tech Stack</h3>
        <div className="logo-list">
          <Html5Logo />
          <Css3Logo />
          <NodeLogo />
          <ReactLogo />
          <GitLogo />
        </div>
      </section>
    </main>
  );
};
