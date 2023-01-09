import Dogs from "../../components/Dogs"
import { useUser } from "../../contextAPI/UserProvider"
import { Navigate } from "react-router"

export default function DogsPage() {
    document.title = "MB Energy | Dogs"
    const { loggedIn, rememberMe } = useUser()
    return (
        <div className="page">
            {(!loggedIn && !rememberMe) && <Navigate to="/" />}
            <Dogs />
        </div>
    )
}
