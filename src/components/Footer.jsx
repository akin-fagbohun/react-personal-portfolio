// import { Link } from 'react-router-dom';
import { GithubLogo } from '../components/icons/GithubLogo';

export const Footer = () => {
  return (
    <nav>
      <div className="footer-group">
        <ul className="footer-links">
          <li>
            <div>
              GitHub - get icon
              {/* <Link to="/">Home</Link> */}
              <GithubLogo />
            </div>
          </li>
          <li>
            LinkedIn - get icon
            {/* <Link to="/projects">Projects</Link> */}
          </li>
          <li>
            Contact - onclick - show email?
            {/* <Link to="/contact">Contact</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
