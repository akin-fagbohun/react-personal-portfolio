import { Link } from 'react-router-dom';
import { GithubLogo } from '../components/icons/GithubLogo';
import { LinkedInLogo } from './icons/LinkedInLogo';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-group">
        <div className="footer-links">
          <GithubLogo />
          <Link to="https://github.com/akin-fagbohun">GitHub</Link>
        </div>
        <div className="footer-links">
          <LinkedInLogo />
          <Link to="https://www.linkedin.com/in/akinfagbohun/">LinkedIn</Link>
        </div>
        <small className="copyright">© Akin Fagbohun. All rights reserved.</small>
      </div>
    </footer>
  );
};
