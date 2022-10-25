import style from './../style.less'

import emailIcon from '@images/email.svg'
import keyIcon from '@images/key.svg'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import FormField from '@components/FormField'
import Button from '@components/Button'
import VerificationNote from '@components/VerificationNote';
import { useAuthorization } from '../../../api/auth'
import { useState } from 'react'

const SignupFrom = () => {
  const [isOnVerivication, setIsOnVerification] = useState(false);
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Minimum 8 characters ')
      .max(20, 'Maximum 20 characters ')
      .required('Password is required'),
    rpassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
    email: Yup.string().email('Invalid email').required('Email is required'),
  })

  const { useSignup } = useAuthorization()

  const { isLoading, isError, error, mutate } = useSignup(setIsOnVerification)

  if(isOnVerivication) {
    return(
      <VerificationNote />
    )
  }

  return (   
    <Formik
      initialValues={{
        email: '',
        password: '',
        rpassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        mutate({
          email: values.email,
          password: values.password,
        })
      }}
    >
      <div className={style.auth_form}>
        <h2 className={style.auth_form__header}>Sign up</h2>
        <Form className={style.auth_form__formik}>
          <div className={style.auth_form__fields}>
            <FormField placeholder="Email" icon={emailIcon} name="email" />
            <FormField
              placeholder="Password"
              icon={keyIcon}
              name="password"
              type="password"
            />
            <FormField
              placeholder="Repeat password"
              icon={keyIcon}
              name="rpassword"
              type="password"
            />
          </div>
          <Button text="Sign up" TAG="button" isLoading={isLoading} />
        </Form>
        {
          isError ? <span className={style.auth_form__error}>{error?.response.data.message}</span> : null
        }
        <div className={style.auth_form__info}>
          Registering you are accepting all our
          <a href="vk.com" className={style.auth_form__link}>
            Terms and Condotons
          </a>
        </div>
      </div>
    </Formik>
  )
}

export default SignupFrom
