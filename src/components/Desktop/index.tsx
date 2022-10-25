import style from './style.less'

import fullScreenIcon from '@images/fullscreen.svg'

import { useState, useRef } from 'react'

const Desktop = () => {
  const desktopRef = useRef(null)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const makeFullScreen = async () => {
    const desktopCoords = desktopRef.current.getBoundingClientRect()

    const x = desktopCoords.left
    const y = desktopCoords.top
    const width = desktopRef.current.offsetWidth
    const height = desktopRef.current.offsetHeight

    if (!isFullScreen) {
      desktopRef.current.style.position = 'absolute'
      desktopRef.current.style.width = 100 + '%'
      desktopRef.current.style.height = 100 + '%'
      desktopRef.current.style.left = 0
      desktopRef.current.style.top = 0
    } else {
      desktopRef.current.style.position = 'relative'
    }

    setIsFullScreen(!isFullScreen)

    console.log(x, y, width, height)
  }

  return (
    <div className={style.desktop} ref={desktopRef}>
      <svg className={style.desktop__fs_icon} onClick={makeFullScreen}>
        <use xlinkHref={`#${fullScreenIcon.id}`} />
      </svg>
    </div>
  )
}

export default Desktop
