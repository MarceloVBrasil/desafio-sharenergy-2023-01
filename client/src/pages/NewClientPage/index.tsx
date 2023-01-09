import NewClientForm from "../../components/NewClientForm"
import "./NewClientPage.scss"
import { useUser } from "../../contextAPI/UserProvider"
import { Navigate } from "react-router"

export default function NewClientPage() {
    const { loggedIn, rememberMe } = useUser()
    return (
        <div className="new-client-page">
            {(!loggedIn && !rememberMe) && <Navigate to="/" />}
            <NewClientForm />
        </div>
    )
}
