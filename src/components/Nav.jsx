// import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <div className="nav-group">
        <ul className="nav-links">
          <li>
            Home
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            Projects
            {/* <Link to="/projects">Projects</Link> */}
          </li>
          <li>
            Contact
            {/* <Link to="/contact">Contact</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
