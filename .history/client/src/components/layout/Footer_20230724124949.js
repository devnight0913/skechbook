import { Link } from "react-router-dom";
import MediaCard from "../books/MediaCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from "react";

const Footer = ({books}) => {

  return (
    <div className="m-4">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Link to="/login">
              <MediaCard
                title="ASDF"
                imgURL="http://s3.amazonaws.com/data.arthousecoop.com/attachments/357058/standard/11044-02.jpg"
              />
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/login">
              <MediaCard
                title="ASDF"
                imgURL="http://s3.amazonaws.com/data.arthousecoop.com/attachments/357058/standard/11044-02.jpg"
              />
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/login">
              <MediaCard
                title="ASDF"
                imgURL="http://s3.amazonaws.com/data.arthousecoop.com/attachments/357058/standard/11044-02.jpg"
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  books: PropTypes.array,
}
const mapStateToProps = (state) => ({
  books: state.book.books
})

export default connect(mapStateToProps)(Footer);
