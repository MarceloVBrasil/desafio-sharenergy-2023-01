import LoginForm from "../../components/LoginForm"
import "./HomePage.scss"
import { useUser } from "../../contextAPI/UserProvider"
import UserArray from "../../components/UserArray"

export default function HomePage() {
    document.title = "MB Energy | Home"
    const { loggedIn, rememberMe } = useUser()
    return (
        <div className="home-page">
            {loggedIn || rememberMe ? <UserArray /> : <LoginForm />}
        </div>
    )
}
