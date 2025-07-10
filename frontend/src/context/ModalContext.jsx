
import { createContext, useContext, useRef } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const loginRef = useRef(null);
  const signupRef = useRef(null);

  const openLogin = () => loginRef.current?.showModal();
  const openSignup = () => signupRef.current?.showModal();

  return (
    <ModalContext.Provider value={{ loginRef, signupRef, openLogin, openSignup }}>
      {children}
    </ModalContext.Provider>
  );
};


ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useModal = () => useContext(ModalContext);
