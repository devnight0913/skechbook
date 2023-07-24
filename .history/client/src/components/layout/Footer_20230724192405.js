import { Link } from "react-router-dom";
import MediaCard from "../books/MediaCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { loadBook, moreBook } from "../../actions/book";
import { Button } from "@mui/material";
// import { useDispatch } from "react-redux";

const Footer = ({ books, loadBook }) => {
  useEffect(() => {
    loadBook();
  }, [loadBook]);
  let pageNumber = 1;
  // const dispatch = useDispatch();
  function moreLoad(){
    moreBook(pageNumber);
    pageNumber++;
  }
  return (
    <div className="m-4">
      <Container>
        <Grid container spacing={6}>
          {books.map((book, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Link to="/login">
                  <MediaCard
                    title={book.title ? book.title : "Default"}
                    imgURL={book.frontPage}
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>
        <div>
          <h1>More Loader</h1>
          <Button variant="contained" onClick={moreLoad}>More Loader</Button>
        </div>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  loadBook: PropTypes.func,
  books: PropTypes.array,
};
const mapStateToProps = (state) => ({
  books: state.book.books,
});

export default connect(mapStateToProps, { loadBook, moreBook })(Footer);

// Landing.propTypes = {
//   isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });
// export default connect(mapStateToProps)(Landing);
// export default connect(mapStateToProps, { logout })(Navbar);
