import Modal from "components/Modal";

import AuthModal from "../AuthModal";

const initialState = { name: "", email: "", password: "" };

const RegisterModal = ({ close }) => {
  const handleSubmit = state => {
    console.log(state);
  };

  return (
    <Modal close={close}>
      <AuthModal
        title="Registration"
        text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
        btnText="Sign Up"
        handleSubmit={handleSubmit}
        isRegister={true}
        initialState={initialState}
      />
    </Modal>
  );
};

export default RegisterModal;
