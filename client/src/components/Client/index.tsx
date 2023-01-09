import { ClientType } from "../../types/client"
import { axiosInstanceServerURL } from "../../utils/axiosInstance";
import avatar from "../../assets/images/client.png"
import "./Client.scss"
import Button from "../Button"
import { Link } from "react-router-dom"
import ModalDelete from "../ModalDelete"
import { useState } from "react"
import { useUser } from "../../contextAPI/UserProvider";

export default function Client({ cpf, email, address, phone, fullName, id }: ClientType) {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { setClientPageNumber } = useUser()
    return (
        <div className='client'>
            <ModalDelete show={showModal} setShowModal={setShowModal} onClick={handleDelete} />
            <section className='client-section'>
                <p className='client-section__title'>{`${fullName}`}</p>
                <img src={avatar} alt="clients" className="client-section__image" />
            </section>
            <section className='client-section'>
                <div className='client-section-group'>
                    <p className='client-section__title'>contact</p>
                    <p className='client-section__info'>{email}</p>
                </div>
                <div className='client-section-group'>
                    <p className='client-section__title'>phone</p>
                    <p className='client-section__info'>{phone}</p>
                </div>
            </section>
            <div className="client-buttons">
                <Button text="Delete" type="delete" onClick={() => setShowModal(true)} />
                <Link to={`/clients/${id}`} className="client-buttons-button-container"><Button text="Details" /></Link>
            </div>
        </div>
    )

    async function handleDelete() {
        try {
            await axiosInstanceServerURL.delete(`/client/${id}`)
            setClientPageNumber(1)
        } catch (error) {

        }
    }
}
