import { Link } from "react-router-dom";
import MediaCard from "../books/MediaCard";

const Footer = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">
            <MediaCard
              title="ASDF"
              imgURL="http://s3.amazonaws.com/data.arthousecoop.com/attachments/81745/standard/39053-70.jpg"
            />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <MediaCard
              title="ASDF"
              imgURL="http://s3.amazonaws.com/data.arthousecoop.com/attachments/81745/standard/39053-70.jpg"
            />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <MediaCard
              title="ASDF"
              imgURL="http://s3.amazonaws.com/data.arthousecoop.com/attachments/81745/standard/39053-70.jpg"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
