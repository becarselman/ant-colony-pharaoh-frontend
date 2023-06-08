import { useEffect } from "react";
import "./modal.scss";
import { CloseOutlined } from "@ant-design/icons"
import ReactPortal from "./Portal";
import ModalItem from "./ModalItem";

function Modal({ items, isOpen, handleClose, handleSubmit, isLoading }) {
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
          {
            isLoading === false ?
              <button type="submit" onClick={handleSubmit}>Save</button>
            :
              <button type="submit">...</button>
          }
        </div>
      </div>
    </ReactPortal>
  );
}
export default Modal;