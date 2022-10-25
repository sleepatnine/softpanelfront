import style from './style.less';

import SignupFrom from '@forms/SignupForm'

const RegistrationPage = () => {
    return(
        <div className={style.registration_page}>
            <SignupFrom />
        </div>
    )
}

export default RegistrationPage;