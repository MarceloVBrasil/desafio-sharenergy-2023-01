import "./NewClientForm.scss"
import Button from "../Button"
import Input from "../Input"
import { useState, FormEvent } from "react"
import DropDownMenu from "../DropDownMenu"
import { useNavigate } from "react-router"
import { ClientType } from "../../types/client"
import { formatCPF } from "../../utils/functions/formatCPF"
import { formatPhoneNumber } from "../../utils/functions/formatPhoneNumber"
import { isPhoneValid } from "../../utils/functions/isPhoneValid"
import { isCPFValid } from "../../utils/functions/isCPFValid"
import { isFullNameValid } from "../../utils/functions/isFullNameValid"
import { isCityValid } from "../../utils/functions/isCityValid"
import { isStreetValid } from "../../utils/functions/isStreetValid"
import { isEmailValid } from "../../utils/functions/isEmailValid"
import { isStateValid } from "../../utils/functions/isStateValid"
import { axiosInstanceServerURL } from "../../utils/axiosInstance"
import ModalError from "../ModalError"
import { isClientFormValid } from "../../utils/functions/isClientFormValid"

export default function NewClientForm() {
    const [client, setClient] = useState<ClientType>({
        cpf: '', fullName: '', address: { street: '', city: '', state: '' }, email: '', phone: ''
    })
    const [error, setError] = useState<ClientType>({
        cpf: '', fullName: '', address: { street: '', city: '', state: '' },
        email: '', phone: ''
    })
    const [response, setResponse] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)
    const navigate = useNavigate()

    return (
        <>
            <ModalError show={showModal} message={response} setShowModal={setShowModal} />
            <form className="new-client-form" onSubmit={handleSubmit} onKeyDown={handleEnterPress}>
                <section className="new-client-form-section">
                    <p className="new-client-form-section__title">user information</p>
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
                        placeholder="000.000.000-00"
                        value={client.cpf}
                        onChange={(e) => handleChange({ cpf: formatCPF(e.target.value) })}
                    />
                    <Input
                        label={"email"}
                        type={"text"}
                        error={error.email}
                        onChange={(e) => handleChange({ email: e.target.value })}
                    />
                    <Input
                        label={"phone"}
                        type={"text"}
                        error={error.phone}
                        placeholder="(00)0000-0000"
                        value={client.phone}
                        onChange={(e) => handleChange({ phone: formatPhoneNumber(e.target.value) })}
                    />
                </section>
                <section className="new-client-form-section">
                    <p className="new-client-form-section__title">address information</p>
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
                <div className="new-client-form-buttons">
                    <Button type={"cancel"} text={"cancel"} onClick={handleCancelButton} />
                    <Button text={"add client"} type={"submit"} />
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
        setError(newErrors)
        e.preventDefault()

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
            const response = await axiosInstanceServerURL.post("/client", client)
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

    function handleEnterPress(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            e.preventDefault()
            handleSubmit(e)
        }
    }
}
