import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor, index }) => {
  const { _id, name, image } = instructor;
  const profession = [
    "Director",
    "Screen Writer",
    "Film Editor",
    "Sound Designer",
    "Animator",
    "Cinematography",
  ];

  return (
    <section className="p-6 border rounded-lg">
      <div className="avatar">
        <div className="rounded-full w-36">
          <img src={image} alt="Profile Image" />
        </div>
      </div>

      <div className="flex-grow space-y-3">
        <h1 className="text-2xl font-semibold">{name}</h1>

        <p>{profession[index]}</p>

        <div className="flex items-start justify-between w-full p-3 bg-gray-700">
          <div>
            <h3 className="font-semibold">Courses</h3>
            <p>4</p>
          </div>

          <div>
            <h3>Students</h3>
            <p>200</p>
          </div>
        </div>

        <Link to={`/instructors/${_id}`} className="btn btn-outline">
          View Profile
        </Link>
      </div>
    </section>
  );
};

InstructorCard.propTypes = {
  instructor: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default InstructorCard;
