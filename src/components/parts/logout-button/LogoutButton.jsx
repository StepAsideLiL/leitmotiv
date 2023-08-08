import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useFireAuth from "../../../hooks/useFireAuth";

const LogoutButton = ({ className }) => {
  const { auth, logout } = useFireAuth();
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    logout(auth)
      .then(() => {
        toast.success("Logout Successful!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button className={className} onClick={handleLogoutBtn}>
      Logout
    </button>
  );
};

LogoutButton.propTypes = {
  className: PropTypes.string,
};

export default LogoutButton;
