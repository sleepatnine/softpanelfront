import styles from './style.less'

import { FC } from 'react'

interface IUserActions {
  url: string
  name: string
}

const UserActions: FC<IUserActions> = ({ url, name }) => {
  return (
    <div className={styles.action}>
      <img src={url} alt="eye" className={styles.action__result_action} />
      {name}
    </div>
  )
}

export default UserActions
