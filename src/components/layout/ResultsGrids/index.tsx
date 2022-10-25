import styles from './style.less'

import { FC } from 'react'

import {IResultGrids} from '@apptypes/ResultGrids'

const ResultsGrids: FC<IResultGrids> = ({ children }) => {
  const widthes = [74, 106, 135, 156, 265]

  const generateGrids = () => {
    let arrayToDrop = []
    if (Array.isArray(children[1])) {
      arrayToDrop = [children[0], ...children[1]]
    } else {
      arrayToDrop = [...children]
    }
    return arrayToDrop
  }

  return (
    <div className={styles.row}>
      {generateGrids().map((elem, idx) => {
        return (
          <div key={idx} className={styles.col} style={{ width: widthes[idx] }}>
            {elem}
          </div>
        )
      })}
    </div>
  )
}
export default ResultsGrids
