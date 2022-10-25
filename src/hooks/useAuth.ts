import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const navigate = useNavigate()

  const login = useCallback((accessToken: any) => {
    localStorage.setItem('token', accessToken)
    setToken(accessToken);
    navigate('/')
  }, [])

  const logout = useCallback(() => {
      localStorage.setItem('token', '')
      setToken(null),
      navigate('login')
  }, [navigate])

  return {login, logout, token}
}