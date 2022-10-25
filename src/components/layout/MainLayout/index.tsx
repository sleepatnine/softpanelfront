import style from './style.less'

import { FC, ReactNode } from 'react'

import Menu from '@components/Menu'
import Header from '@layout/Header'

interface IMainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <main className={style.main_layout}>
      <div className={style.main_layout__nav}>
        <Menu />
      </div>
      <div className={style.main_layout__wrapper}>
        <Header />
        <div className={style.main_layout__changer}>
          <div className={style.main_layout__content}>{children}</div>
        </div>
      </div>
    </main>
  )
}

export default MainLayout
