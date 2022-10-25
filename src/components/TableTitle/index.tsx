import styles from './style.less'

import { FC } from 'react'

import { IResultTitleColumn } from '@apptypes/ResultTitleColumns';

import downarrow from '@images/downarrow.png'

const TableTitle: FC<IResultTitleColumn> = ({ name, sortFunction = null }) => {
  return (
    <div className={styles.title}>
      {name}
      {sortFunction ? (
        <img
          src={downarrow}
          alt="downarrow"
          className={styles.title__down_arrow}
        />
      ) : null}
    </div>
  )
}

export default TableTitle
