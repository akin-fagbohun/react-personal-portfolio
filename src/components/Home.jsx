import { Html5Logo } from './icons/Html5Logo';
import { GitLogo } from './icons/GitLogo';
import { Css3Logo } from './icons/Css3Logo';
import { NodeLogo } from './icons/NodeLogo';
import { ReactLogo } from './icons/ReactLogo';
import { ArrowForwardCircle } from '../components/icons/sprites/ArrowForwardCircle';
import { CtaButtonInternal } from './icons/reusables/CtaButtonInternal';
import EverythingNewsCard from '../img/projects/everything-news-frontend/EverythingNewsCard.jpg';
import Backend_cover from '../img/projects/everything-news-frontend/Backend_cover.jpg';
import Oddjobs_cover from '../img/projects/oddjobs/Oddjobs_cover.jpg';

export const Home = () => {
  return (
    <main>
      <section className="headline-wrapper">
        <div className="headline-content">
          <h1>Hello, I&apos;m Akin. </h1>
          <p>A Leeds based Full-Stack developer.</p>
        </div>
      </section>
      <section className="project-card-wrapper">
        <h3 className="section-heading">Projects</h3>
        <ul id="project-carousel" className="project-carousel">
          <li className="project-card">
            <img className="card-image" src={EverythingNewsCard} alt="" />
            <div className="card-content">
              <h3>
                <a href="/everything-news">Everything News</a>
              </h3>
              <p>A static article site, built with React</p>
              <div className="card-cta">
                <a href="/everything-news">
                  <ArrowForwardCircle />
                </a>
              </div>
            </div>
          </li>
          <li className="project-card">
            <img className="card-image" src={Backend_cover} alt="" />
            <div className="card-content">
              <h3>
                <a href="/everything-news-rest-api">Everything News REST API</a>
              </h3>
              <p>A REST API, built with Node, Express and PostgreSQL.</p>
              <div className="card-cta">
                <a href="/everything-news-rest-api">
                  <ArrowForwardCircle />
                </a>
              </div>
            </div>
          </li>
          <li className="project-card">
            <img className="card-image" src={Oddjobs_cover} alt="" />
            <div className="card-content">
              <h3>
                <a href="./oddjobs-mobile-app">OddJobs Mobile App</a>
              </h3>
              <p>A mobile app, built with React Native.</p>
              <div className="card-cta">
                <a href="./oddjobs-mobile-app">
                  <ArrowForwardCircle />
                </a>
              </div>
            </div>
          </li>
          {/* <li className="project-card">
            <img className="card-image" src="" alt="" />

            <div className="card-content">
              <h3>Pairs Game</h3>
              <p>Play some pairs and test your recall.</p>
              <div className="card-cta">
                <ArrowForwardCircle />
              </div>
            </div>
          </li> */}
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
        <CtaButtonInternal destination={'../tech-stack'} buttonText={'Learn more'} />
      </section>
    </main>
  );
};
