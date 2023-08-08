import Main from "../../components/ui/Main";
import LogoutButton from "../../components/parts/logout-button/LogoutButton";
import { Link } from "react-router-dom";
import useFireAuth from "../../hooks/useFireAuth";

const ProfilePage = () => {
  const { userDB } = useFireAuth();

  return (
    <Main className="container max-w-5xl mx-auto">
      <h1 className="text-2xl">{userDB?.name}</h1>

      <div>
        <LogoutButton className="btn" />
      </div>

      <div>
        <Link to="/add-course">Add Course</Link>
      </div>
    </Main>
  );
};

export default ProfilePage;
