import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader";
import BgImageZoom from "../../../components/ui/BgImageZoom";

import chessTrain from "../../../assets/projects/chess-tarin.jpg";
import digItUp from "../../../assets/projects/dig-it-up.jpg";
import keyOfTheSky from "../../../assets/projects/key-of-the-sky.jpg";
import redPiano from "../../../assets/projects/red-piano.jpg";

const OurStudentProjectSection = () => {
  return (
    <Section>
      <div className="grid grid-cols-2 gap-10">
        <BgImageZoom url={chessTrain}>
          <h1 className="text-2xl font-black">Chess Train</h1>
        </BgImageZoom>

        <BgImageZoom url={digItUp}>
          <h1 className="text-2xl font-black">Dig It Up</h1>
        </BgImageZoom>
      </div>

      <div>
        <SectionHeader className="text-center">
          Our Student Project
        </SectionHeader>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <BgImageZoom url={keyOfTheSky}>
          <h1 className="text-2xl font-black">Key Of The Sky</h1>
        </BgImageZoom>

        <BgImageZoom url={redPiano}>
          <h1 className="text-2xl font-black">Red Piano</h1>
        </BgImageZoom>
      </div>
    </Section>
  );
};

export default OurStudentProjectSection;
