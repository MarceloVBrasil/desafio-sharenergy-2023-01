import EditClient from "../../components/EditClient"
import "./EditClientPage.scss"
import { useUser } from "../../contextAPI/UserProvider"
import { Navigate } from "react-router"

export default function EditClientPage() {
    const { loggedIn, rememberMe } = useUser()

    return (
        <div className='edit-client-page'>
            {(!loggedIn && !rememberMe) && <Navigate to="/" />}
            <EditClient />
        </div>
    )
}
