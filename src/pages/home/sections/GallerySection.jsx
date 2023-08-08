import Section from "../../../components/ui/Section";

import image1 from "../../../assets/gallery/gallery-1.jpg";
import image2 from "../../../assets/gallery/gallery-2.jpg";
import image3 from "../../../assets/gallery/gallery-3.jpg";
import image4 from "../../../assets/gallery/gallery-4.jpg";
import image5 from "../../../assets/gallery/gallery-5.jpg";
import image6 from "../../../assets/gallery/gallery-6.jpg";
import image7 from "../../../assets/gallery/gallery-7.jpg";
import image8 from "../../../assets/gallery/gallery-8.jpg";
import image9 from "../../../assets/gallery/gallery-9.jpg";
import image10 from "../../../assets/gallery/gallery-10.jpg";
import image11 from "../../../assets/gallery/gallery-11.jpg";
import image12 from "../../../assets/gallery/gallery-12.jpg";
import image13 from "../../../assets/gallery/gallery-13.jpg";
import image14 from "../../../assets/gallery/gallery-14.jpg";
import image15 from "../../../assets/gallery/gallery-15.jpg";
import image16 from "../../../assets/gallery/gallery-16.jpg";
import image17 from "../../../assets/gallery/gallery-17.jpg";
import image18 from "../../../assets/gallery/gallery-18.jpg";
import image19 from "../../../assets/gallery/gallery-19.jpg";
import image20 from "../../../assets/gallery/gallery-20.jpg";
import image21 from "../../../assets/gallery/gallery-21.jpg";
import image22 from "../../../assets/gallery/gallery-22.jpg";
import image23 from "../../../assets/gallery/gallery-23.jpg";
import ImageGallery from "../../../components/ui/ImageGallery";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
];

const GallerySection = () => {
  return (
    <Section>
      <ImageGallery images={images} />
    </Section>
  );
};

export default GallerySection;
