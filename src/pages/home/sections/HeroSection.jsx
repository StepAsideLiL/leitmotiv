import { Link } from "react-router-dom";
import BackgroundVideoPlayerSlider from "../../../components/ui/BackgroundVideoPlayerSlider";
import Section from "../../../components/ui/Section";

const HeroSection = () => {
  return (
    <Section wide>
      <div className="relative">
        <BackgroundVideoPlayerSlider url="https://www.youtube.com/watch?v=xBasQG_6p40" />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0">
          <div className="flex flex-col items-center justify-center h-full gap-4 text-white">
            <h3 className="text-3xl">Your Passion For Filmmaking Starts At</h3>

            <h1 className="font-bold text-8xl">LEITMOTIV ACADEMY</h1>

            <h3 className="text-2xl">
              The Best Online Filmmaking Learning Platfrom
            </h3>

            <div className="space-x-4">
              <Link className="text-white rounded-none btn btn-outline hover:bg-warning">
                Enroll Now
              </Link>

              <Link className="text-white rounded-none btn btn-outline hover:bg-warning">
                See Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
