import "./User.scss"
import { user } from '../../types/user'

export default function User({ picture, fullName, email, username, age, id }: user) {
    return (
        <div className='user'>
            <section className='user-section'>
                <p className='user-section__title'>{`${fullName}`}</p>
                <img src={picture} alt="users" className="user-section__image" />
            </section>
            <section className='user-section'>
                <div className='user-section-group'>
                    <p className='user-section__title'>contact</p>
                    <p className='user-section__info'>{email}</p>
                </div>
                <div className="user-section-group-double">
                    <div className='user-section-group'>
                        <p className='user-section__title'>username</p>
                        <p className='user-section__info'>{username}</p>
                    </div>
                    <div className='user-section-group'>
                        <p className='user-section__title'>age</p>
                        <p className='user-section__info'>{age} years old</p>
                    </div>
                </div>
            </section>
            <div className="user-buttons">

            </div>
        </div>
    )
}
