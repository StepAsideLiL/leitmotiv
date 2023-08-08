import Main from "../../components/ui/Main";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import BecomeAnInstructorSection from "./sections/BecomeAnInstructorSection";
import CourseCategoriesSection from "./sections/CourseCategoriesSection";
import FilmAwardsSection from "./sections/FilmAwardsSection";
import GallerySection from "./sections/GallerySection";
import HeroSection from "./sections/HeroSection";
import OurInstructorSection from "./sections/OurInstructorSection";
import OurStudentProjectSection from "./sections/OurStudentProjectSection";
import PopularCoursesSection from "./sections/PopularCoursesSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";

const HomePage = () => {
  useDynamicTitle("Home");

  return (
    <Main className="space-y-40 mb-28">
      <HeroSection />

      <CourseCategoriesSection />

      <PopularCoursesSection />

      <OurInstructorSection />

      <WhyChooseUsSection />

      <OurStudentProjectSection />

      <FilmAwardsSection />

      <GallerySection />

      <BecomeAnInstructorSection />
    </Main>
  );
};

export default HomePage;
