import "./EditClient.scss"
import Button from "../Button"
import Input from "../Input"
import { FormEvent, useEffect, useRef, useState } from "react"
import { ClientType } from "../../types/client"
import DropDownMenu from "../DropDownMenu"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
import { formatPhoneNumber } from "../../utils/functions/formatPhoneNumber"
import { formatCPF } from "../../utils/functions/formatCPF"
import { isPhoneValid } from "../../utils/functions/isPhoneValid"
import { isCPFValid } from "../../utils/functions/isCPFValid"
import { isFullNameValid } from "../../utils/functions/isFullNameValid"
import { isCityValid } from "../../utils/functions/isCityValid"
import { isStreetValid } from "../../utils/functions/isStreetValid"
import { isEmailValid } from "../../utils/functions/isEmailValid"
import { isStateValid } from "../../utils/functions/isStateValid"
import ModalError from "../ModalError"
import { axiosInstanceServerURL } from "../../utils/axiosInstance"
import { isClientFormValid } from "../../utils/functions/isClientFormValid"

export default function EditClient() {
    const [client, setClient] = useState<ClientType>({
        cpf: '', fullName: '', address: { street: '', city: '', state: '' }, email: '', phone: ''
    })
    const [error, setError] = useState<ClientType>({
        cpf: '', fullName: '', address: { street: '', city: '', state: '' }, email: '', phone: ''
    })
    const [response, setResponse] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getClientById(id as string)
    }, [id])

    const formRef = useRef<HTMLFormElement>(null)

    return (
        <>
            <ModalError show={showModal} message={response} setShowModal={setShowModal} />
            <form className="edit-client-form" ref={formRef} onSubmit={handleSubmit} onKeyDown={handleEnterPress}>
                <section className="edit-client-form-section">
                    <p className="edit-client-form-section__title">user information</p>
                    <Input
                        label={"name"}
                        type={"text"}
                        error={error.fullName}
                        value={client.fullName}
                        onChange={(e) => handleChange({ fullName: e.target.value })}
                    />
                    <Input
                        label={"cpf"}
                        type={'text'}
                        error={error.cpf}
                        value={client.cpf}
                        onChange={(e) => handleChange({ cpf: formatCPF(e.target.value) })}
                    />
                    <Input
                        label={"email"}
                        type={"text"}
                        error={error.email}
                        value={client.email}
                        onChange={(e) => handleChange({ email: e.target.value })}
                    />
                    <Input
                        label={"phone"}
                        type={"text"}
                        error={error.phone}
                        value={client.phone}
                        onChange={(e) => handleChange({ phone: formatPhoneNumber(e.target.value) })}
                    />
                </section>
                <section className="edit-client-form-section">
                    <p className="edit-client-form-section__title">address information</p>
                    <Input
                        label={"street"}
                        type={"text"}
                        error={error.address.street}
                        value={client.address.street}
                        onChange={(e) => handleAddressChange({ street: e.target.value })}
                    />
                    <Input
                        label={"city"}
                        type={"text"}
                        error={error.address.city}
                        value={client.address.city}
                        onChange={(e) => handleAddressChange({ city: e.target.value })}
                    />
                    <DropDownMenu error={error.address.state} selected={client.address.state}
                        onChange={(e) => handleAddressChange({ state: e.target.value })} />
                </section>
                <div className="edit-client-form-buttons">
                    <Button type={"cancel"} text={"cancel"} onClick={handleCancelButton} />
                    <Button text={"edit client"} type={"submit"} />
                </div>
            </form>
        </>
    )

    function handleCancelButton(e: React.FormEvent) {
        e.preventDefault()
        navigate(-1)
    }

    function handleChange(changes: object): void {
        setClient(prev => {
            return { ...prev, ...changes }
        })
    }

    function handleAddressChange(addressChanges: object): void {
        const newAddress = { ...client.address, ...addressChanges }
        handleChange({ address: newAddress })
    }

    async function handleSubmit(e: FormEvent) {
        const newErrors: ClientType = { cpf: '', fullName: '', address: { street: '', city: '', state: '' }, phone: '', email: '' }
        e.preventDefault()
        setError({ cpf: '', fullName: '', address: { street: '', city: '', state: '' }, phone: '', email: '' })

        if (!isCPFValid(client.cpf)) newErrors.cpf = 'cpf is not valid'
        if (!isFullNameValid(client.fullName)) newErrors.fullName = "full name is not valid"
        if (!isEmailValid(client.email)) newErrors.email = 'email is not valid'
        if (!isPhoneValid(client.phone)) newErrors.phone = 'phone is not valid'
        if (!isStreetValid(client.address.street)) newErrors.address.street = 'street is not valid'
        if (!isCityValid(client.address.city)) newErrors.address.city = 'city is not valid'
        if (!isStateValid(client.address.state)) newErrors.address.state = 'state is not valid'
        if (!isClientFormValid(newErrors)) {
            return setError(newErrors);
        }

        try {
            const response = await axiosInstanceServerURL.put(`/client/${id}`, client)
            if (response.status === 400) {
                setResponse(response.data)
                setShowModal(true)
            }
            navigate("/clients")
        } catch (error: any) {
            setResponse(error.response.data.message)
            setShowModal(true)
        }
    }

    async function getClientById(id: string): Promise<void> {
        try {
            const response = await axiosInstanceServerURL.get(`/client/${id}`)
            setClient(response.data)
        } catch (error) {
            navigate("/clients")
        }
    }

    function handleEnterPress(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            e.preventDefault()
            handleSubmit(e)
        }
    }
}
