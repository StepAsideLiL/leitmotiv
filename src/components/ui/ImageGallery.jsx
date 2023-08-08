import PropTypes from "prop-types";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-3">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="image"
          className="object-cover w-full aspect-square"
        />
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
