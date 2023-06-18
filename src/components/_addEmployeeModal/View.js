import {useState} from "react";
import AddEmployeeModal from "./AddEmployeeModal";

const OpenModalButton = ({isLoading, actions}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
      <>
          <button onClick={openModal}>
              Click to Open Modal
          </button>

          <AddEmployeeModal handleClose={closeModal} isOpen={isOpen} isLoading={isLoading} actions={actions} />
      </>
    )
}

export default OpenModalButton