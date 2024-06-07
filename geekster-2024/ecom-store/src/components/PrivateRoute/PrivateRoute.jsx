import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const isAuthenticated = false;
const PrivateRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
