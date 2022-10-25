import style from './style.less'

import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IMenuItemProps {
  link: string
  text: string
  icon: any
}

const MenuItem:FC<IMenuItemProps> = ({ link, text, icon, notLink }) => {
  return (
    <Link to={link} className={style.menu_item_link}>
      <div className={style.menu_item}>
        <svg className={style.menu_item__icon}>
          <use xlinkHref={`#${icon.id}`} />
        </svg>
        <span className={style.menu_item__text}>
            {text}
        </span>
      </div>
    </Link>
  )
}

export default MenuItem
