import { useEffect } from "react";
import "./modal.scss";
import { CloseOutlined } from "@ant-design/icons"
import ReactPortal from "./Portal";
import FormField from "../_addEmployeeModal/utils/FormField";

function Modal({ items, isOpen, handleClose }) {
  //componentWillUnmount
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);


  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId={"modal-wrapper"}>
      <div className="modal">
        <CloseOutlined onClick={handleClose} className="close-btn"/>
        <div className="modal-content">
          { items }
        </div>
      </div>
    </ReactPortal>
  );
}
export default Modal;