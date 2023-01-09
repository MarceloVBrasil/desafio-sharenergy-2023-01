import { ModalType } from "../../types/modal";
import "./ModalError.scss";
import ReactDOM from "react-dom";
function ModalError({ show, message, setShowModal }: ModalType) {

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
                        <h1 className='modal-body__title'>Incoming</h1>
                        <p className='modal-body__text'>{message}</p>
                    </div>
                    <div className='modal-footer'>
                        <button onClick={handleCloseModal} className='modal-footer__modal'>Ok</button>
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

export default ModalError;