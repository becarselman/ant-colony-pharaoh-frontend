import React, {useState} from "react";
import Modal from "../modal/modal";

const Dashboard = ({props}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Click to Open Modal
      </button>

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        This is Modal Content!
      </Modal>
    </>
  );
}

export default Dashboard