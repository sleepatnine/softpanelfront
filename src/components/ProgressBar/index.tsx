import styles from './style.less'

import { FC } from 'react'

import classNames from 'classnames'

interface IResultProgress {
  progress: number
}

const ProgressBar: FC<IResultProgress> = ({ progress }) => {

  const conditionClass = classNames(`${styles.result_condition}`, {
    [styles.result_progress__load_low]: progress <= 20,
    [styles.result_progress__load_low_plus]: progress <= 40 && progress > 20,
    [styles.result_progress__load_medium]: progress <= 60 && progress > 40,
    [styles.result_progress__load_medium_plus]:
      progress <= 80 && progress > 60,
    [styles.result_progress__load_high]: progress <= 100 && progress > 80,
  })

  return (
    <div className={styles.progress}>
      <div className={styles.result_progress_bar}>
        <div className={conditionClass} style={{ width: progress + '%' }}></div>
      </div>
      <div className={styles.percent}>{progress}%</div>
    </div>
  )
}

export default ProgressBar
