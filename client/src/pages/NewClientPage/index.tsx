import NewClientForm from "../../components/NewClientForm"
import { useUser } from "../../contextAPI/UserProvider"
import { Navigate } from "react-router"

export default function NewClientPage() {
    const { loggedIn, rememberMe } = useUser()
    return (
        <div className="page">
            {(!loggedIn && !rememberMe) && <Navigate to="/" />}
            <NewClientForm />
        </div>
    )
}
