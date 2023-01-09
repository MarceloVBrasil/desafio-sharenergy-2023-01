import { ModalType } from "../../types/modal";
import Button from "../Button";
import "./ModalDelete.scss";
import ReactDOM from "react-dom";
function ModalDelete({ show, setShowModal, onClick }: ModalType) {

    if (!show) {
        return null
    };

    return ReactDOM.createPortal(
        <section>
            <div className='modal-container'>
                <div className='modal'>
                    <div className='modal-header'>
                        <p onClick={() => setShowModal(false)}>&times;</p>
                    </div>
                    <div className='modal-body'>
                        <h1 className='modal-body__title'>Are you sure you want to delete?</h1>
                    </div>
                    <div className='modal-footer'>
                        <Button text="Cancel" type="cancel" onClick={handleCloseModal} />
                        <Button text="Delete" type="delete" onClick={onClick} />
                    </div>
                </div>
            </div>
            <div className='overlay'></div>
        </section>,
        document.getElementById('root')!
    )

    function handleCloseModal(): void {
        setShowModal(false)
    }
}

export default ModalDelete;