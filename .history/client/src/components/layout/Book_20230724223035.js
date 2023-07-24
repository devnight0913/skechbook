import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { getContent } from "../../actions/book";
import { useParams } from "react-router-dom";

const Footer = ({ bookContent, getContent }) => {
  const bookId = useParams().id;
  useEffect(() => {
    getContent(bookId);
  }, [getContent, bookId]);
  console.log(bookContent.lenght())
  return (
    <div className="m-4">
      <Container>
        <Grid container spacing={6}>
            {bookContent.lenght?(
                <>
                {bookContent.map((content, index)=>{
                    return (
                        <Grid item xs={2} key={index}>
                            <img src={content} alt="" />
                        </Grid>
                    )
                })}
                </>
            ):(
                <h1>
                    There is no Content
                </h1>
            )}
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
