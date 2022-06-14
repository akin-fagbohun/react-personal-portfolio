import Oddjobs_gif from '../../img/projects/oddjobs/Oddjobs_gif.gif';
import { NodeLogo } from '../icons/NodeLogo';
import { GitLogo } from '../icons/GitLogo';
import { ReactLogo } from '../icons/ReactLogo';
import { MongodbLogo } from '../icons/MongodbLogo';
import { JestLogo } from '../icons/JestLogo';
import { SocketioLogo } from '../icons/SocketioLogo';
import { GoogleMapsLogo } from '../icons/GoogleMapsLogo';
import { CtaButtonExternal } from '../icons/reusables/CtaButtonExternal';

export const Oddjobs = () => {
  return (
    <main className="project-wrapper">
      <h1 className="project-title">OddJobs Mobile App</h1>
      <p className="project-summary">OddJobs is a mobile app built with React Native.</p>
      <p className="project-summary">
        As our final project at Northcoders, myself along with four other developers took an idea
        for an app through every stage of the production process from concept development through to
        live demonstration, stopping short of deployment. We followed agile development
        methodologies, utilising a Kanban ticketing system, version control and daily stand-up
        meetings to ensure that we progressed well through our project objectives.
      </p>
      <h3 className="project-subtitle">App Preview</h3>
      <div className="screenshots-wrapper">
        <div className="screenshot">
          <img src={Oddjobs_gif} alt="Oddjobs preview" />
        </div>
      </div>
      <CtaButtonExternal
        destination={'https://northcoders.com/projects/may-2022/odd-jobs'}
        buttonText={'Video Demo'}
      />
      <h3 className="project-subtitle">The Problem</h3>
      <p className="project-summary">
        There are often times in our home lives where we have a task that we simply don’t have the
        resources to complete the job, be that time, tools or knowledge. For example, DIY,
        gardening, or even renovations too small for professional quotations.
      </p>
      <p className="project-summary">
        OddJobs was created as a community lead solution to that problem, where a user is able to
        share jobs that they require completed. Members of the community are able to see jobs in
        their vacinity and informally offer their own time and expertise.
      </p>
      <section className="project-stack-wrapper">
        <h3 className="section-heading">Tech Stack</h3>
        <div className="project-logo-list">
          <div className="project-logo-wrapper">
            <ReactLogo />
            <p>React Native</p>
          </div>
          <div className="project-logo-wrapper">
            <NodeLogo />
            <p>Node JS</p>
          </div>
          <div className="project-logo-wrapper">
            <GoogleMapsLogo />
            <p>Google Maps API</p>
          </div>
          <div className="project-logo-wrapper">
            <MongodbLogo />
            <p>Mongo DB</p>
          </div>
          <div className="project-logo-wrapper">
            <SocketioLogo />
            <p>Socket IO</p>
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
    </main>
  );
};
