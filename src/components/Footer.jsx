import { GithubLogo } from '../components/icons/GithubLogo';
import { LinkedInLogo } from './icons/LinkedInLogo';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-group">
        <div className="footer-links">
          <a target="_blank" href="https://github.com/akin-fagbohun" rel="noreferrer">
            <GithubLogo />
          </a>
          <a target="_blank" href="https://github.com/akin-fagbohun" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div className="footer-links">
          <a target="_blank" href="https://www.linkedin.com/in/akinfagbohun/" rel="noreferrer">
            <LinkedInLogo />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/akinfagbohun/" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <small className="copyright">© Akin Fagbohun. All rights reserved.</small>
      </div>
    </footer>
  );
};
