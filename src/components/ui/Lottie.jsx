import { Player } from "@lottiefiles/react-lottie-player";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Lottie = ({ src, children = "", to = "" }) => {
  return (
    <Link to={to} className="block space-y-3">
      <div className="h-96">
        <Player
          src={src}
          loop
          autoplay
          className="object-cover transition-all h-3/4 hover:scale-125"
        />
      </div>

      <div className="text-center">{children}</div>
    </Link>
  );
};

Lottie.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
  to: PropTypes.string,
};

export default Lottie;
