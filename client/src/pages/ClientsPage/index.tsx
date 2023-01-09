import ClientArray from "../../components/ClientArray"
import "./ClientsPage.scss"
import { useUser } from "../../contextAPI/UserProvider"
import { Navigate } from "react-router"

export default function ClientsPage() {
    const { loggedIn, rememberMe } = useUser()
    return (
        <div className="clients-page">
            {(!loggedIn && !rememberMe) && <Navigate to="/" />}
            <ClientArray />
        </div>
    )
}
