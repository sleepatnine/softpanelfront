import style from './style.less'

import AuthForm from '@forms/AuthForm'

const AuthPage = () => {
  return (
    <main className={style.auth_page}>
        <AuthForm />
    </main>
  )
}
export default AuthPage
