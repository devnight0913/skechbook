import { Link } from "react-router-dom";
import MediaCard from "../books/MediaCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { loadBook } from "../../actions/book";

const Footer = ({ books, loadBook }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBook());
  }, [])
  return (
    <div className="m-4">
      <Container>
        <Grid container spacing={2}>
          {books.map((book, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Link to="/login">
                  <MediaCard title={book.title} imgURL={book.frontPage} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  loadBook : PropTypes.func,
  books: PropTypes.array,
};
const mapStateToProps = (state) => ({
  books: state.book.books,
});

export default connect(mapStateToProps, { loadBook })(Footer);

// Landing.propTypes = {
//   isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });
// export default connect(mapStateToProps)(Landing);
// export default connect(mapStateToProps, { logout })(Navbar);
