import { GithubLogo } from '../components/icons/GithubLogo';
import { LinkedInLogo } from './icons/LinkedInLogo';
import { NorthcodersLogo } from './icons/NorthcodersLogo';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-group">
        <a target="_blank" href="https://github.com/akin-fagbohun" rel="noreferrer">
          <div className="footer-links">
            <GithubLogo />
            GitHub
          </div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/akinfagbohun/" rel="noreferrer">
          <div className="footer-links">
            <LinkedInLogo />
            LinkedIn
          </div>
        </a>
        <a target="_blank" href="https://northcoders.com/" rel="noreferrer">
          <div className="footer-links">
            <NorthcodersLogo />
            Northcoders
          </div>
        </a>
        <small className="copyright">© Akin Fagbohun. All rights reserved.</small>
      </div>
    </footer>
  );
};
