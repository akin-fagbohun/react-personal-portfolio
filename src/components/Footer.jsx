import { Link } from 'react-router-dom';
import { GithubLogo } from '../components/icons/GithubLogo';
import { LinkedInLogo } from './icons/LinkedInLogo';

export const Footer = () => {
  return (
    <nav>
      <div className="footer-group">
        <ul className="footer-links">
          <li>
            <div>
              <Link to="https://github.com/akin-fagbohun">Github</Link>
              <GithubLogo />
            </div>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/akinfagbohun/">LinkedIn</Link>
            <LinkedInLogo />
          </li>
        </ul>
      </div>
    </nav>
  );
};
