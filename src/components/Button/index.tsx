import style from './style.less'

import { FC } from 'react'

import { IButtonProps } from '@apptypes/Button'

import Spinner from '@components/Spinner'

const Button: FC<IButtonProps> = ({ text, TAG = 'button', isLoading }) => {
  return <TAG className={style.button}>{isLoading ? <Spinner /> : text}</TAG>
}

export default Button
