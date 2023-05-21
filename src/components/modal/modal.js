import { useEffect } from "react";
import "./modal.scss";
import { CloseOutlined } from "@ant-design/icons"
import ReactPortal from "./portal";
import ModalItem from "./modalItem";

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

  const mappedItems = items.map(i => {
    return (
        <ModalItem item = { i } key = { i.id } />
    )
  })

  return (
    <ReactPortal wrapperId={"modal-wrapper"}>
      <div className="modal">
        <CloseOutlined onClick={handleClose} className="close-btn"/>
        <div className="modal-content">
          { mappedItems }
          <button type="submit">Save</button>
        </div>
      </div>
    </ReactPortal>
  );
}
export default Modal;