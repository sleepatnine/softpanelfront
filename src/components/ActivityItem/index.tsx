import { FC } from 'react'

import style from './style.less'

import { Activity } from '@apptypes/Activity'

const ActivityItem: FC<Activity> = ({ message, type, date, styles }) => {
  return (
    <div className={style.activity_item} style={styles}>
      <div className={style.activity_item__decoration}>
        <span></span>
        <div></div>
      </div>
      <div className={style.activity_item__content}>
        <div className={style.activity_item__info}>
          <div className={style.activity_item__message}>{message}</div>
          <time className={style.activity_item__time}>{'date'}</time>
        </div>
        <span className={style.activity_item__category}>{type}</span>
      </div>
    </div>
  )
}

export default ActivityItem
