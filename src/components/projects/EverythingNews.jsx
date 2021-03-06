import { CtaButtonExternal } from '../icons/reusables/CtaButtonExternal';
import EverythingNews_1 from '../../img/projects/everything-news-frontend/EverythingNews_1.jpg';
import EverythingNews_2 from '../../img/projects/everything-news-frontend/EverythingNews_2.jpg';
import EverythingNews_3 from '../../img/projects/everything-news-frontend/EverythingNews_3.jpg';
import EverythingNews_4 from '../../img/projects/everything-news-frontend/EverythingNews_4.jpg';
import { NodeLogo } from '../icons/NodeLogo';
import { GitLogo } from '../icons/GitLogo';
import { ReactLogo } from '../icons/ReactLogo';
import { Html5Logo } from '../icons/Html5Logo';
import { Css3Logo } from '../icons/Css3Logo';

export const EverythingNews = () => {
  return (
    <main className="project-wrapper">
      <h1 className="project-title">Everything News</h1>
      <p className="project-summary">
        Everything News is a two-part project where I built the front-end UI and functionality for
        an article site as well as the back-end database and REST API. Within the React framework, I
        built a site that allows a user to browse the contents of my database.
      </p>
      <p className="project-summary">
        Requests are made to the API using Axios, allowing the user to take various actions such as
        filtering and sorting of articles, browsing by topic, as well as &quot;liking&quot; and
        commenting on posts.
      </p>

      <p className="project-summary">
        Click below to demo the project, or browse the available screenshots.
      </p>

      <CtaButtonExternal destination={'https://everything-news.netlify.app/'} buttonText={'Demo'} />
      <h3 className="project-subtitle">Screenshots</h3>
      <div className="screenshots-wrapper">
        <div className="screenshot">
          <img src={EverythingNews_1} alt="" />
          <small>Article Site Homepage</small>
        </div>
        <div className="screenshot">
          <img src={EverythingNews_2} alt="" />
          <small>Filter functionality</small>
        </div>
        <div className="screenshot">
          <img src={EverythingNews_3} alt="" />
          <small>Ability to &quot;like&quot; articles post and/or delete comments.</small>
        </div>
        <div className="screenshot">
          <img src={EverythingNews_4} alt="" />
          <small>Utilising query params to filter content.</small>
        </div>
      </div>
      <section className="project-stack-wrapper">
        <h3 className="section-heading">Tech Stack</h3>
        <div className="project-logo-list">
          <div className="project-logo-wrapper">
            <ReactLogo />
            <p>React</p>
          </div>
          <div className="project-logo-wrapper">
            <NodeLogo />
            <p>Node JS</p>
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
      {/* <h3>Project Retro</h3>
      <p>Write a retro for this project</p> */}
    </main>
  );
};
