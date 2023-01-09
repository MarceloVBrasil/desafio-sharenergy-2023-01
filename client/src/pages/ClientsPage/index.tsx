import ClientArray from "../../components/ClientArray"
import { useUser } from "../../contextAPI/UserProvider"
import { Navigate } from "react-router"

export default function ClientsPage() {
    const { loggedIn, rememberMe } = useUser()
    return (
        <div className="page">
            {(!loggedIn && !rememberMe) && <Navigate to="/" />}
            <ClientArray />
        </div>
    )
}
