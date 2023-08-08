import { Link } from "react-router-dom";
import Section from "../../../components/ui/Section";
import finalStep from "../../../assets/images/final-step.png";

const WhyChooseUsSection = () => {
  return (
    <Section>
      <div className="text-white">
        <div className="flex flex-col items-start md:flex-row md:my-24">
          <div className="sticky flex flex-col w-full px-8 mt-2 md:top-36 lg:w-1/3 md:mt-12">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">
              Why Choose Us
            </p>
            <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
              Learning By Doing
            </p>
            <p className="mb-4 text-sm md:text-base text-gray-50">
              Our courses are designed in such a way that the students can
              explore their field by doing. You learn the most when you do it by
              yourself.
            </p>
            <Link
              to="/courses"
              className="px-4 py-2 mr-auto text-yellow-300 bg-transparent border border-yellow-300 rounded shadow hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:border-transparent"
            >
              Explore Now
            </Link>
          </div>

          <div className="sticky ml-0 md:ml-12 lg:w-2/3">
            <div className="container w-full h-full mx-auto">
              <div className="relative h-full p-10 overflow-hidden wrap">
                <div
                  className="absolute h-full border border-2-2 border-yellow-555"
                  // style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>

                <div
                  className="absolute h-full border border-2-2 border-yellow-555"
                  // style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>

                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">First Step</p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Enroll
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      Pick your favourite course and enroll in that course from
                      the course details page. Its that easy.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300">
                      Second Step
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Complete The Course
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      Complete the online course. It is important that the
                      students complete the course so that they can move on to
                      the next step.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">Third Step</p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Capstone Project
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      It is the most exciting part our courses. The students
                      must complete a capstone project related to their course.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">Final Step</p>
                    <h4 className="mb-3 text-lg font-bold text-left md:text-2xl">
                      Certification
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      Our certification process is most reliable way to verify a
                      student is ready to step into the world of filmmaking and
                      film production. We are connected with many production
                      house where we recommend our student to.
                    </p>
                  </div>
                </div>
              </div>

              <img className="mx-auto -mt-36 md:-mt-36" src={finalStep} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUsSection;
