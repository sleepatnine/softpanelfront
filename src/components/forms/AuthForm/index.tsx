import style from './../style.less'

import emailIcon from '@images/email.svg'
import keyIcon from '@images/key.svg'

import { useContext } from 'react'
import { Form, Formik } from 'formik'

import FormField from '@components/FormField'
import Button from '@components/Button'

import { useAuthorization } from './../../../api/auth'

import authContext from '../../../context/authContext'
import { useParams } from 'react-router-dom'

const AuthForm = () => {
  const auth = useContext(authContext)
  const { useLogin } = useAuthorization()

  const {isLoading, error, isError, mutate, data} = useLogin(auth.login);
  const {verificationToken} = useParams();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        mutate(values)
      }}
    >
      <div className={style.auth_form}>
        <h2 className={style.auth_form__header}>Login</h2>
        <Form className={style.auth_form__formik}>
          <div className={style.auth_form__fields}>
            <FormField placeholder="Email" icon={emailIcon} name="email" />
            <FormField
              placeholder="Password"
              icon={keyIcon}
              name="password"
              type="password"
            />
          </div>
          <Button text="Login" TAG="button" isLoading={isLoading} />
        </Form>
        {
          isError ? <span className={style.auth_form__error}>{error?.response.data.message}</span> : null
        }
        <div className={style.auth_form__info}>
          Have not an accout?{' '}
          <a href="vk.com" className={style.auth_form__link}>
            Sign up
          </a>
        </div>
        <div className={style.auth_form__info}>
          <a href="vk.com" className={style.auth_form__link}>
            Reset password
          </a>
        </div>
      </div>
    </Formik>
  )
}

export default AuthForm