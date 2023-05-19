import React, {useState} from "react";
import Modal from "../common/modal";

const Dashboard = ({props}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*FIXME: temp style, will be fixed*/}
      <button style={{position: "absolute", left: "800px"}} onClick={() => setIsOpen(true)}>
        Click to Open Modal
      </button>

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        This is Modal Content!
      </Modal>
    </>
  );
}

export default Dashboard