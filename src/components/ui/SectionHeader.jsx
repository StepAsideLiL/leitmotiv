import PropTypes from "prop-types";

const SectionHeader = ({ children, className = "" }) => {
  return <h1 className={`text-4xl font-black ${className}`}>{children}</h1>;
};

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionHeader;
