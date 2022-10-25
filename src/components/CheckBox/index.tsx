import styles from './style.less'

import { FC} from 'react'

import {ICheckbox} from '@apptypes/Checkbox'

const Checkbox: FC<ICheckbox> = ({ isChecked, handleChange }) => {
  return (
    <div className={styles.checkbox}>
      <label><input type="checkbox" checked={isChecked} onChange={handleChange} className={isChecked ? "checked" : ""} /></lebel>
      
    </div>
  )
}

export default Checkbox
