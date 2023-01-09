import "./ClientList.scss"
import Client from "../Client"
import { Link } from "react-router-dom"
import Button from "../../components/Button"
import { useEffect, useState } from "react"
import { ClientType } from "../../types/client"
import { axiosInstanceServerURL } from "../../utils/axiosInstance"
import ModalError from "../ModalError"
import { useUser } from "../../contextAPI/UserProvider"
import CircularProgress from "@mui/material/CircularProgress"
import NoClient from "../NoClient"

export default function ClientArray() {
    const [clients, setClients] = useState<ClientType[] | null>(null)
    const [response, setResponse] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)
    const { clientPageNumber, setClientPageNumber } = useUser()
    const numberOfClientsPerPage = 2

    useEffect(() => {
        getAllClients()
    }, [clients])

    if (!clients) {
        return <div className="clients-page"><CircularProgress /></div>
    }

    if (clients.length === 0) {
        return (
            <div className="client-list">
                <Link to={"/clients/add"} className="client-list-button-container"><Button text="New Client" /></Link>
                <NoClient />
            </div>
        )

    }

    return (
        <div className="client-list">
            <ModalError show={showModal} message={response} setShowModal={setShowModal} />
            <Link to={"/clients/add"} className="client-list-button-container"><Button text="New Client" /></Link>
            {clients.map((client, index) => {
                if (numberOfClientsPerPage * (clientPageNumber - 1) <= index && index < numberOfClientsPerPage * clientPageNumber) {
                    return <Client {...client} key={client.id} />
                }
            })}
            <nav className="client-list-nav">
                <p className="client-list-nav__link" onClick={handlePrevPage}>Prev</p>
                {clientPageNumber}
                <p className="client-list-nav__link" onClick={handleNextPage}>Next</p>
            </nav>
        </div>
    )

    async function getAllClients() {
        try {
            const response = await axiosInstanceServerURL.get("/client")
            setClients(response.data)
        } catch (error: any) {
            setResponse(error.response.data)
            setShowModal(true)
        }
    }

    function handlePrevPage(): void {
        if (clientPageNumber > 1) setClientPageNumber((prev: number) => prev - 1)
    }

    function handleNextPage(): void {
        if (clientPageNumber < getLastPageNumber(clients as ClientType[])) setClientPageNumber((prev: number) => prev + 1)
    }

    function getLastPageNumber(list: ClientType[]): number {
        return Math.ceil(list.length / numberOfClientsPerPage)
    }
}
