import style from './style.less';

const VerificationNote = () => {
    return(
        <div className={style.verification_note}>
            <span>Вы успешно зарегестрировали аккаунт! <br /> Перейдите по ссылке, 
                отправленой на вашу почту, для подтверждения аккаунта</span>
        </div>
    )
}

export default VerificationNote;