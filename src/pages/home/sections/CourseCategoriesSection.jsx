import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader";
import Lottie from "../../../components/ui/Lottie";

import animation from "../../../assets/lotties/animation.json";
import screenwriting from "../../../assets/lotties/screenwriting.json";
import directing from "../../../assets/lotties/directing.json";
import editing from "../../../assets/lotties/editing.json";
import cinematography from "../../../assets/lotties/cinematography.json";
import soundDesign from "../../../assets/lotties/sound-design.json";

const CourseCategoriesSection = () => {
  return (
    <Section>
      <SectionHeader>Top Categories</SectionHeader>

      <div className="grid grid-cols-3 gap-5">
        <Lottie src={animation}>
          <h1 className="text-2xl">Animation</h1>
        </Lottie>

        <Lottie src={screenwriting}>
          <h1 className="text-2xl">Screenwriting</h1>
        </Lottie>

        <Lottie src={directing}>
          <h1 className="text-2xl">Directing</h1>
        </Lottie>

        <Lottie src={editing}>
          <h1 className="text-2xl">Film Editing</h1>
        </Lottie>

        <Lottie src={cinematography}>
          <h1 className="text-2xl">Cinematography</h1>
        </Lottie>

        <Lottie src={soundDesign}>
          <h1 className="text-2xl">Sound Design</h1>
        </Lottie>
      </div>
    </Section>
  );
};

export default CourseCategoriesSection;
