import { Link } from "react-router-dom";
import useFireAuth from "../../../../hooks/useFireAuth";
import ProfileAvatar from "./ProfileAvatar";

const LoginAndProfile = () => {
  const { user, userDB } = useFireAuth();

  return (
    <div className="navbar-end">
      {user ? <ProfileAvatar userDB={userDB} /> : <NagivateToLoginPage />}
    </div>
  );
};

const NagivateToLoginPage = () => {
  return (
    <Link to="/login" className="btn btn-primary">
      Login
    </Link>
  );
};

export default LoginAndProfile;
