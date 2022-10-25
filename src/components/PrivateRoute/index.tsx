import { FC, useContext } from 'react'
import { Navigate } from 'react-router-dom'

// import authContext from './../../context/authContext'


const PrivateRoute: FC = ({ children }) => {
  // const auth = useContext(authContext)
  // const isAuth = Boolean(auth.token)
  const isAuth = true

  return isAuth ? <>{children}</> : <Navigate to="/auth/login" />
}

export default PrivateRoute