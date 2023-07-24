import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Footer from "./Footer";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Skech Book</h1>

            <p className="lead">
              Create developer profile/portfolio, share posts and interact with
              other developers
            </p>

            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>

              <Link to="/login" className="btn">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
