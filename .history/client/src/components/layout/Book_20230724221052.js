import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { getContent } from "../../actions/book";

const Footer = ({ bookContent, getContent }) => {
  useEffect(() => {
    getContent();
  }, [getContent]);
  console.log(bookContent);
  return (
    <div className="m-4">
      <Container>
        <Grid container spacing={6}>
            <h1>ASDF</h1>
        </Grid>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  bookContent: PropTypes.array,
};
const mapStateToProps = (state) => ({
  bookContent: state.book.bookContent,
});

export default connect(mapStateToProps, { getContent })(Footer);
