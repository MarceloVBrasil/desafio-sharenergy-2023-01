import React, { useRef, useState } from "react"
import Button from "../Button"
import Checkbox from "../Checkbox"
import Input from "../Input"
import "./LoginForm.scss"
import { loginError } from "../../types/loginError"
import { useUser } from "../../contextAPI/UserProvider"
import { axiosInstanceServerURL } from "../../utils/axiosInstance"
import ModalError from "../ModalError"

export default function LoginForm() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [response, setResponse] = useState<string>('')
    const { logIn, rememberMeNextTime, doNotRememberMeNextTime } = useUser()
    const [error, setError] = useState<loginError>({ username: '', password: '' })
    const formRef = useRef<HTMLFormElement>(null)
    return (
        <form className="login-form" ref={formRef} onKeyDown={handleEnterPress}>
            <ModalError show={showModal} message={response} setShowModal={setShowModal} />
            <section className="login-form-section">
                <h2 className="login-form__title">Login</h2>
                <Input label="username" error={error.username} type="text" />
                <Input label="password" error={error.password} type="password" />
            </section>
            <section className="login-form-buttons">
                <Checkbox />
                <Button text="login" onClick={login} />
            </section>
        </form>
    )

    async function login(e: React.FormEvent): Promise<loginError | void> {
        setError({ username: '', password: '' })
        e.preventDefault()
        const errors: loginError = { username: '', password: '' }
        if (!formRef.current?.username.value) errors.username = 'username required'
        if (!formRef.current?.password.value) errors.password = 'password required'
        if (Object.values(errors).some((value) => value !== '')) return setError(errors)

        const formData: loginError = {
            username: formRef.current?.username.value,
            password: formRef.current?.password.value
        }

        try {
            await axiosInstanceServerURL.post('/user/login', formData)
            if (formRef.current?.remember.checked) rememberMeNextTime()
            else doNotRememberMeNextTime()
            logIn()

        } catch (error: any) {
            setResponse(error.response.data.message)
            setShowModal(true)
        }

    }

    function handleEnterPress(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            e.preventDefault()
            login(e)
        }
    }
}
