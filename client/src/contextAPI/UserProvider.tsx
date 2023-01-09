import React, { useContext, useState } from 'react'
import { useLocalStorage, useSessionStorage } from 'usehooks-ts'

type UserContextProviderProps = {
    children: React.ReactNode
}

interface IUser {
    loggedIn: boolean
    setLoggedIn?: (value: boolean) => void
    logIn?: () => void
}

const userContext = React.createContext<IUser | null>(null)
const PREFIX: string = "MBEnergy-"

export function useUser(): any {
    return useContext(userContext)
}

export default function UserProvider({ children }: UserContextProviderProps) {
    const [rememberMe, setRememberMe] = useLocalStorage<boolean>(PREFIX + 'rememberMe', false)
    const [loggedIn, setLoggedIn] = useSessionStorage<boolean>(PREFIX + 'loggedIn', false)
    const [userPageNumber, setUserPageNumber] = useSessionStorage<number>(PREFIX + 'userPageNumber', 1)
    const [clientPageNumber, setClientPageNumber] = useSessionStorage<number>(PREFIX + 'clientPageNumber', 1)

    function logIn(): void {
        setLoggedIn(true)
    }

    function logOut(): void {
        setLoggedIn(false)
        setRememberMe(false)
        setUserPageNumber(1)
        setClientPageNumber(1)
    }

    function rememberMeNextTime() {
        setRememberMe(true)
    }

    function doNotRememberMeNextTime() {
        setRememberMe(false)
    }

    const userContextValue: any = {
        rememberMe,
        loggedIn,
        logIn,
        logOut,
        rememberMeNextTime,
        doNotRememberMeNextTime,
        userPageNumber,
        setUserPageNumber,
        clientPageNumber,
        setClientPageNumber
    }

    return (
        <userContext.Provider value={userContextValue}>
            {children}
        </userContext.Provider>
    )
}
