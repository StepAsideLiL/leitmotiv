import PropTypes from "prop-types";
import useFireAuth from "../hooks/useFireAuth";
import Main from "../components/ui/Main";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isAuthLoading } = useFireAuth();

  if (isAuthLoading) {
    return (
      <Main className="absolute inset-0 bg-white">
        <div className="flex items-center justify-center w-full h-full">
          <h1 className="text-xl">Loading...</h1>
        </div>
      </Main>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
