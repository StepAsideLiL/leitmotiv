import PropTypes from "prop-types";

const Main = ({ children, className = "" }) => {
  return <main className={`${className} min-h-screen`}>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Main;
