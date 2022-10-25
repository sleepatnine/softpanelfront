import style from './style.less'

import softwareIcon from '@images/softwares.svg'
import homeIcon from '@images/home.svg'
import marketplaceIcon from '@images/marketplace.svg'
import referalsIcon from '@images/referal.svg'
import userIcon from '@images/user.svg'
import resultsIcon from '@images/results.svg'

import MenuItem from '@components/MenuItem'

const Menu = () => {
  const links = [
    {
      icon: homeIcon,
      text: 'Dashboard',
      link: '/',
    },
    {
      icon: softwareIcon,
      text: 'Softwares',
      link: '/softwares',
    },
    {
      icon: marketplaceIcon,
      text: 'Marketplace',
      link: '/marketplace',
    },
    {
      icon: referalsIcon,
      text: 'Referals',
      link: '/referals',
    },
    {
      icon: userIcon,
      text: 'Profile',
      link: '/profile',
    },
    {
      icon: resultsIcon,
      text: 'Results',
      link: '/results',
    },
  ]

  return (
    <aside className={style.menu}>
      {links.map((link, idx) => {
        return (
          <MenuItem
            key={idx}
            link={link.link}
            text={link.text}
            icon={link.icon}
          />
        )
      })}
    </aside>
  )
}

export default Menu
