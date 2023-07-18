import {useEffect} from "react";
import "./modal.scss";
import {LeftOutlined} from "@ant-design/icons"
import ReactPortal from "./Portal";

function Modal({header, formItems, buttonItems, isOpen, handleClose}) {
    //componentWillUnmount
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        document.body.style.overflow = "hidden"
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
            document.body.style.overflow = "scroll"
        };
    }, [handleClose]);


    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId={"modal-wrapper"}>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-back-button-wrapper" onClick={handleClose}>
                        <LeftOutlined className="close-btn"/> <span>Back</span>
                    </div>
                    <div className="modal-header-wrapper modal-wrapper">
                        <span className="modal-header">{header}</span>
                    </div>
                    <div className="modal-content-wrapper modal-wrapper">
                        {formItems}
                    </div>
                    <div className="modal-buttons-wrapper modal-wrapper">
                        { buttonItems }
                    </div>
                </div>
            </div>
        </ReactPortal>
    );
}

export default Modal;