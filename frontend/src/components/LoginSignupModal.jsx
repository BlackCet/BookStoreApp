import { useRef, useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import Login from './Login';
import Signup from './Signup';

export default function LoginSignup() {
  const loginDialogRef = useRef(null);
  const signupDialogRef = useRef(null);
  const { loginRef, signupRef } = useModal();

  useEffect(() => {
    if (loginRef) loginRef.current = loginDialogRef.current;
    if (signupRef) signupRef.current = signupDialogRef.current;
  }, [loginRef, signupRef]);

  return (
    <>
      <Login dialogRef={loginDialogRef} />
      <Signup dialogRef={signupDialogRef} />
    </>
  );
}
