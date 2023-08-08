import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import useGetAllCourses from "../../../components/fetch/get-all-courses";
import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader";

const PopularCoursesSection = () => {
  const { courses } = useGetAllCourses();

  return (
    <Section>
      <SectionHeader>Our Courses</SectionHeader>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card course={courses[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[4]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[5]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[6]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[7]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[8]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[9]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[10]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card course={courses[11]} />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

const Card = ({ course }) => {
  return (
    <div className="border border-gray-600 card bg-base-100 h-96">
      <figure>
        <img src={course?.image} alt="Course Thumbnail" className="" />
      </figure>
      <div className="card-body">
        <h2 className="text-lg font-semibold">{course?.title}</h2>
        <p>
          By <span className="font-semibold">{course?.instructorName}</span>
        </p>
        <p>${course?.price}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object.isRequired,
};

export default PopularCoursesSection;
