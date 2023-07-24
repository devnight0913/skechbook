import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div >
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-code-branch" /> Home
          </Link>
        </li>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
