import { CtaButtonExternal } from '../icons/reusables/CtaButtonExternal';
import { PostgreSqlLogo } from '../icons/PostgreSqlLogo';
import { NodeLogo } from '../icons/NodeLogo';
import { JestLogo } from '../icons/JestLogo';
import { GitLogo } from '../icons/GitLogo';

export const EverythingNewsApi = () => {
  return (
    <main className="project-wrapper">
      <h1 className="project-title">Everything News REST API</h1>
      <p className="project-summary">
        For the back-end segment of the Everything News project, I built a relational database using
        PostgreSQL. Atop this database, I built a RESTful API in order to facilitate CRUD operations
        from the front-end UI to the database.
      </p>
      <p className="project-summary">Demo Everything News by clicking the link below.</p>
      {/* <h3>Screenshots</h3> */}
      <CtaButtonExternal destination={'https://everything-news.netlify.app/'} buttonText={'Demo'} />

      <section className="project-stack-wrapper">
        <h3 className="section-heading">Tech Stack</h3>
        <div className="project-logo-list">
          <div className="project-logo-wrapper">
            <NodeLogo />
            <p>Node JS</p>
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
        </div>
      </section>
      {/* <h3>Project Retro</h3>
      <p>Write a retro for this project</p> */}
    </main>
  );
};
