export interface ICheckbox {
    isChecked: boolean
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }