
import { useAuth } from "../context/AuthProvider";
import { useModal } from "../context/ModalContext";
import { useEffect } from "react";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const [authUser] = useAuth();
  const { openLogin } = useModal();

  useEffect(() => {
    if (!authUser) {
      openLogin(); 
    }
  }, [authUser, openLogin]);

  return authUser ? children : null;
};


ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
