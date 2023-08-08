import PropTypes from "prop-types";

const BgImageZoom = ({ url, children = "", height = "240px" }) => {
  return (
    <div
      className="relative flex items-center justify-center w-full m-3 overflow-hidden shadow-xl rounded-2xl group"
      style={{ height: height }}
    >
      <div
        className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-150"
        style={{
          backgroundImage: `url("${url}")`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-60 group-hover:scale-100">
        {children}
      </div>
    </div>
  );
};

BgImageZoom.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
  height: PropTypes.string,
};

export default BgImageZoom;
