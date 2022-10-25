import style from './style.less'

import { FC, useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ActivityItem from '@components/ActivityItem'

interface ActivityProps {
  activityList: typeof Activity[]
}

const Activity: FC<ActivityProps> = ({ activityList }) => {
  const [into, setInto] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems([
      {
        message: 'Started YouTube Software',
        date: new Date(),
        type: 'software',
      },
      {
        message: 'Started YouTube Software',
        date: new Date(),
        type: 'software',
      },
      {
        message: 'Started YouTube Software',
        date: new Date(),
        type: 'software',
      },
    ])
  }, [])

  return (
    <aside className={style.activity}>
      <h3 className={style.activity__title}>Activity</h3>
      <div className={style.activity__content}>
        <TransitionGroup>
          {items.map((item, idx) => {
            const { message, date, type } = item
            const delay = Math.max(idx * 300)
            return (
              <CSSTransition
                key={idx}
                classNames={{
                  enter: style.enter,
                  enterActive: style.enterActive,
                  exit: style.leave,
                  exitActive: style.leaveActive,
                }}
                timeout={1000}
              >
                <>
                  <ActivityItem
                    message={message}
                    date={date}
                    type={type}
                    styles={{ transitionDelay: `${delay}ms` }}
                  />
                </>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </div>
    </aside>
  )
}

export default Activity
