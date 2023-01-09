import React, { useEffect, useState } from "react"
import "./UserList.scss"
import { user } from "../../types/user"
import { axiosInstanceUserGeneratorAPI } from "../../utils/axiosInstance"
import ModalError from "../ModalError"
import User from "../User"
import { CircularProgress } from '@mui/material';
import Input from "../Input"
import { useUser } from "../../contextAPI/UserProvider"

export default function UserArray() {
    const [users, setUsers] = useState<user[]>([])
    const [filteredUsers, setFilteredUsers] = useState<user[]>([])
    const [response, setResponse] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const { userPageNumber, setUserPageNumber } = useUser()

    useEffect(() => {
        getUsers()
    }, [userPageNumber])

    useEffect(() => {
        setFilteredUsers(() => {
            return users.filter(user => {
                if (!searchTerm) return user
                if (user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.username.toLowerCase().includes(searchTerm.toLowerCase())
                ) return user
            })
        })
    }, [users, searchTerm])

    if (!users[0]) {
        return <div className="users-page"><CircularProgress /></div>
    }
    return (
        <div className="user-list">
            <Input label="search user" fontSize="1.2rem" type="text" onChange={handleSearchTerm} searchTerm={searchTerm} />
            <ModalError show={showModal} message={response} setShowModal={setShowModal} />
            {filteredUsers.map((user: user) => <User key={user.id} {...user} />)}
            <nav className="user-list-nav">
                <p className="user-list-nav__link" onClick={handlePrevPage}>Prev</p>
                {userPageNumber}
                <p className="user-list-nav__link" onClick={handleNextPage}>Next</p>
            </nav>
        </div>
    )

    async function getUsers() {
        try {
            const result = await axiosInstanceUserGeneratorAPI(`/?results=5&page=${userPageNumber}&seed=abc`)
            const usersData = result.data.results
            setUsers(usersData.map((user: any) => {
                return {
                    picture: user.picture.medium,
                    fullName: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    username: user.login.username,
                    age: user.registered.age,
                    id: user.login.uuid
                }
            }))
        } catch (error: any) {
            setResponse(error.response.data)
            setShowModal(true)
        }
    }

    function handlePrevPage() {
        if (userPageNumber > 1) {
            setSearchTerm('')
            setUserPageNumber((prev: number) => prev - 1)
        }
    }

    function handleNextPage() {
        setSearchTerm('')
        setUserPageNumber((prev: number) => prev + 1)
    }

    function handleSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value)
    }
}
