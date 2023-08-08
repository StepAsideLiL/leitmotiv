import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const BackgroundVideoPlayerSlider = ({ url }) => {
  return (
    <div className="relative pt-[56.25%]">
      <ReactPlayer
        url={url}
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0", left: "0" }}
      />
    </div>
  );
};

BackgroundVideoPlayerSlider.propTypes = {
  url: PropTypes.string.isRequired,
};

export default BackgroundVideoPlayerSlider;
