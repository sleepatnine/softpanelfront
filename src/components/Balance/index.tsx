import style from './style.less'

const Balance = () => {
  return (
    <div className={style.balance}>
      <h3 className={style.balance__header}>Balance</h3>
      <span className={style.balance__count}>$ 134.5</span>
      <span className={style.balance__currency}>usd</span>
    </div>
  )
}

export default Balance
