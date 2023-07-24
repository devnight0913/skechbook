import { Link } from "react-router-dom";
import MediaCard from "../books/MediaCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Link to="/login">
              <MediaCard
                title="ASDF"
                imgURL="http://s3.amazonaws.com/data.arthousecoop.com/attachments/81745/standard/39053-70.jpg"
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
