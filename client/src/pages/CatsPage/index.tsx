import Cats from "../../components/Cats"
import { useUser } from "../../contextAPI/UserProvider"
import { Navigate } from "react-router"

export default function CatsPage() {
    document.title = "MB Energy | Cats"
    const { loggedIn, rememberMe } = useUser()

    return (
        <div className="page">
            {(!loggedIn && !rememberMe) && <Navigate to="/" />}
            <Cats />
        </div>
    )
}
