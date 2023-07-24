import { Link } from "react-router-dom";
import MediaCard from "../books/MediaCard";

const Footer = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">
            <MediaCard />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;