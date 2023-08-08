import Section from "../../../components/ui/Section";
import profileImage from "../../../assets/images/become-an-instructor.png";
import SectionHeader from "../../../components/ui/SectionHeader";
import { Link } from "react-router-dom";

const BecomeAnInstructorSection = () => {
  return (
    <Section>
      <div className="flex items-center justify-center gap-10">
        <div className="relative w-1/2">
          <img src={profileImage} alt="Profile Image" />
          <div className="absolute bottom-0 right-0 w-3/4 bg-yellow-500 h-3/4 -z-20"></div>
          <div className="absolute top-0 left-0 w-1/2 bg-red-500 rounded-full h-1/2 -z-10"></div>
        </div>

        <div className="w-1/2 space-y-3">
          <SectionHeader>Become An Instructor</SectionHeader>

          <p>
            Share your knowledge with the young and upcoming film enthusiast.
            Your knowledge can create an ara of filmmaking
          </p>

          <Link to="/instructors/apply" className="btn btn-outline">
            Start Today
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default BecomeAnInstructorSection;
