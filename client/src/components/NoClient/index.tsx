import Button from "../Button"
import "./NoClient.scss"
import emptySet from "../../assets/images/empty.png"

export default function NoClient() {
    return (
        <div className='no-client'>
            <section className='no-client-section'>
                <p className='no-client-section__title'>No Client to show</p>
                <img src={emptySet} alt="clients" className="no-client-section__image" />
            </section>
            <section className='no-client-section'>
                <div className='no-client-section-group'>
                    <p className='no-client-section__title'>contact</p>
                    <p className='no-client-section__info'></p>
                </div>
            </section>
            <div className="no-client-buttons">
                <Button text="Delete" type="delete" disabled={true} />
                <Button text="Details" disabled={true} />
            </div>
        </div>
    )
}
