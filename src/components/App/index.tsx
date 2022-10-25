import './../../style.css'

import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth';
import { QueryClientProvider, QueryClient } from 'react-query'

import authContext from '@context/authContext'

import AuthPage from '@pages/AuthPage'
import HomePage from '@pages/HomePage'
import RegistrationPage from '@pages/RegistrationPage'
import PrivateRoute from '@components/PrivateRoute'
import MainLayout from '@layout/MainLayout'
import DashboardBox from '@boxes/DashboardBox'
import SoftwaresBox from '@boxes/SoftwaresBox'
import ResultsBox from '@boxes/ResultBox'

const App = () => {
  const { token, login, logout } = useAuth()
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <authContext.Provider value={{ token, login, logout }}>
        <Routes>
          <Route path="/auth">
            <Route
              path="login"
              element={!Boolean(token) ? <AuthPage /> : <Navigate to="/" />}
            />
            <Route
              path="signup"
              element={
                !Boolean(token) ? <RegistrationPage /> : <Navigate to="/" />
              }
            />
          </Route>
          {/* <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          /> */}
        </Routes>

        <MainLayout>
            <Routes>
              <Route
                path='/'
                element={
                  <DashboardBox />
                }
              />
              <Route
                path='/softwares'
                element={
                  <SoftwaresBox />
                }
              />
                <Route
                path='/results'
                element={
                  <ResultsBox />
                }
              />
            </Routes>
        </MainLayout>
      </authContext.Provider>
    </QueryClientProvider>
  )
}

export default App
