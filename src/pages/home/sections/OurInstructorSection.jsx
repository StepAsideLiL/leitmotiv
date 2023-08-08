import useGetAllInstructors from "../../../components/fetch/get-all-instructors";
import InstructorCard from "../../../components/ui/InstructorCard";
import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader";

const OurInstructorSection = () => {
  const { instructors } = useGetAllInstructors();
  console.log(instructors);

  return (
    <Section>
      <SectionHeader>Our Talented Instructor</SectionHeader>

      <div className="grid grid-cols-2 gap-5">
        {instructors.map((instructor, index) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default OurInstructorSection;
