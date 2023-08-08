import Section from "../../../components/ui/Section";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

import awardWinner from "../../../assets/awards/award-winner.jpg";
import ametureAward from "../../../assets/awards/ameture-award.jpg";
import artAward from "../../../assets/awards/art-award.jpg";
import nationalAward from "../../../assets/awards/national-award.jpg";

const FilmAwardsSection = () => {
  return (
    <Section>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="px-10">
          <div
            className="bg-center bg-cover h-[500px]"
            style={{ backgroundImage: `url("${awardWinner}")` }}
          >
            <div className="relative p-10 space-y-4 text-center bg-gray-600/60 w-96 top-14 left-14">
              <h1 className="text-4xl">Our Students Are Award Winners</h1>

              <p>
                Film Award are an annual celebraion. Film enthusiasts from all
                over the gather here for enjoying film from different culture.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-10">
          <div
            className="bg-center bg-cover h-[500px]"
            style={{ backgroundImage: `url("${artAward}")` }}
          >
            <div className="relative p-10 space-y-4 text-center bg-red-500 w-96 top-14 left-14">
              <h1 className="text-4xl">Our Students Are Award Winners</h1>

              <p>
                Film Award are an annual celebraion. Film enthusiasts from all
                over the gather here for enjoying film from different culture.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-10">
          <div
            className="bg-center bg-cover h-[500px]"
            style={{ backgroundImage: `url("${ametureAward}")` }}
          >
            <div className="relative p-10 space-y-4 text-center bg-slate-500 w-96 top-14 left-14">
              <h1 className="text-4xl">Our Students Are Award Winners</h1>

              <p>
                Film Award are an annual celebraion. Film enthusiasts from all
                over the gather here for enjoying film from different culture.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-10">
          <div
            className="bg-center bg-cover h-[500px]"
            style={{ backgroundImage: `url("${nationalAward}")` }}
          >
            <div className="relative p-10 space-y-4 text-center bg-stone-500 w-96 top-14 left-14">
              <h1 className="text-4xl">Our Students Are Award Winners</h1>

              <p>
                Film Award are an annual celebraion. Film enthusiasts from all
                over the gather here for enjoying film from different culture.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default FilmAwardsSection;
