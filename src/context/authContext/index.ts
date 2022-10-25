import { createContext } from 'react'

interface IAuthContext {
    token: string | null
    login: (accessToken: string) => void
    logout: () => void
}

const authContext = createContext<IAuthContext>({
    token: '',
    login: () => {},
    logout: () => {}
})

export default authContext
