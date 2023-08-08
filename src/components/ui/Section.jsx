import PropTypes from "prop-types";

const Section = ({ children, wide }) => {
  if (wide) {
    return <section className="space-y-10">{children}</section>;
  }

  return (
    <section className="container max-w-5xl mx-auto space-y-10">
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool,
};

export default Section;
