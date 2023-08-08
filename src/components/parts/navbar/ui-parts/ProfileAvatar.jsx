import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileAvatar = ({ userDB }) => {
  let profileImage = userDB?.image ? userDB?.image : "";

  const ProfileName = userDB?.name ? userDB?.name : "User";

  if (!profileImage) {
    return (
      <Link to="/profile">
        <div className="avatar placeholder">
          <div className="w-12 rounded-full bg-neutral-focus text-neutral-content ring ring-primary ring-offset-base-100 ring-offset-2">
            <span className="text-3xl">{ProfileName[0]}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to="/profile">
      <div className="avatar">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={profileImage} />
        </div>
      </div>
    </Link>
  );
};

ProfileAvatar.propTypes = {
  user: PropTypes.object,
  userDB: PropTypes.object,
};

export default ProfileAvatar;
