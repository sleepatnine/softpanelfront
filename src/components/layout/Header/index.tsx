import style from './style.less'

import avatar from '@images/avatar.png'
import emailIcon from '@images/mail.svg'

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>Your Dashbord</h1>
      <div className={style.header__account}>
        <div className={style.header__notification}>
          <div className={style.header__message_counter}>10</div>
          <svg className={style.header__mail_icon}>
            <use xlinkHref={`#${emailIcon.id}`} />
          </svg>
        </div>
        <a href="vk.com" className={style.header__profile}>
          <span className={style.header__email}>useruser1@gmail.com</span>
          <img src={avatar} alt="avatar" className={style.header__avatar} />
        </a>
      </div>
    </header>
  )
}

export default Header
