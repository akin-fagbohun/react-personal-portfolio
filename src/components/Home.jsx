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
          <li className="project-card">{/*<img src="" alt="">*/}</li>
          <li className="project-card">{/*<img src="" alt="">*/}</li>
          <li className="project-card">{/*<img src="" alt="">*/}</li>
          <li className="project-card">{/*<img src="" alt="">*/}</li>
          <li className="project-card">{/*<img src="" alt="">*/}</li>
        </ul>
      </section>
    </main>
  );
};
