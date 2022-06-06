import { NodeLogo } from '../icons/NodeLogo';
import { GitLogo } from '../icons/GitLogo';
import { ReactLogo } from '../icons/ReactLogo';
import { SanityioLogo } from '../icons/SanityioLogo';
import { GraphQlLogo } from '../icons/GraphQlLogo';
import { NextjsLogo } from '../icons/NextjsLogo';
import { CtaButtonExternal } from '../icons/reusables/CtaButtonExternal';

export const NextjsBlog = () => {
  return (
    <main className="project-wrapper">
      <h1 className="project-title">Next JS Blog + CMS</h1>
      <p className="project-summary">Building a Jamstack blog with NextJS and Sanity IO</p>
      <p className="project-summary">
        I wanted my portfolio website to be more than a collection of projects that I have built,
        and one way that I felt that I could do that would be by having a blog section. Looking at
        the technologies available to me, I settled on NextJS as an important technology to be able
        to work with, so set about building a seperate blog section to this portfolio website with
        Next.
      </p>
      <p className="project-summary">
        Having completed stage-1 of the project where I had learnt the basics of NextJS and bridged
        some of my understanding between the Next and React frameworks, I realised that making this
        project sustainable would play a key role in my ability to maintain it going forward and
        give me a valueable opportunity to go deeper into NextJS as an in-demand technology and
        framework.
      </p>
      <p className="project-summary">
        Jamstack is an archtectural design pattern that brings together JavaScript, APIs and Markup
        language in a way that allows developers to build websites unhindered by the content that
        will populate pages.
      </p>
      <p className="project-summary">
        On entry to the blog section or any of its deeper pages, requests are made to the CMS API
        using GraphQL queries. The required content is pre-rendered and returned thanks to
        NextJS&apos; pre-rendering capabilities, along with url slugs being served dynamically.
      </p>
      <p className="project-summary">
        Visit the blog to see what I&apos;m currently working on and to see it in action!
      </p>

      <CtaButtonExternal
        destination={'https://akins-portfolio-blog.netlify.app/blog'}
        buttonText={'Visit blog'}
      />

      <section className="project-stack-wrapper">
        <h3 className="section-heading">Tech Stack</h3>
        <div className="project-logo-list">
          <div className="project-logo-wrapper">
            <ReactLogo />
            <p>React</p>
          </div>
          <div className="project-logo-wrapper">
            <NextjsLogo />
            <p>Next JS</p>
          </div>
          <div className="project-logo-wrapper">
            <NodeLogo />
            <p>Node JS</p>
          </div>
          <div className="project-logo-wrapper">
            <SanityioLogo />
            <p>Sanity.io</p>
          </div>
          <div className="project-logo-wrapper">
            <GraphQlLogo />
            <p>GraphQL</p>
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
