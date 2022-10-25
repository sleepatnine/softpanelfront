import style from './style.less'

import { FC } from 'react'
import { useField } from 'formik'

interface IFormFieldProps {
  placeholder: string
  type?: string
  icon?: any
  name: string
}

const FormField: FC<IFormFieldProps> = ({
  placeholder,
  type = 'text',
  icon,
  name,
}) => {
  const [field] = useField({ placeholder, type, name })
  return (
    <div className={style.form_field}>
      <input
        {...field}
        name={name}
        placeholder={placeholder}
        type={type}
        className={style.form_field__input}
      />
      <svg className={style.form_field__icon}>
        <use xlinkHref={`#${icon.id}`} />
      </svg>
    </div>
  )
}

export default FormField
