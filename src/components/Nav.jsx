import { NavLink } from 'react-router-dom';

export const Nav = () => {
  let activeClassName = 'nav-focus';

  return (
    <nav>
      <div className="nav-group">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-me"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
