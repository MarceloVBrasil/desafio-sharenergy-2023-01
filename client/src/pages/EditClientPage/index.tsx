import EditClient from "../../components/EditClient"
import { useUser } from "../../contextAPI/UserProvider"
import { Navigate } from "react-router"

export default function EditClientPage() {
    const { loggedIn, rememberMe } = useUser()

    return (
        <div className='page'>
            {(!loggedIn && !rememberMe) && <Navigate to="/" />}
            <EditClient />
        </div>
    )
}
