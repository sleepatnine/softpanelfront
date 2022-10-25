import style from './style.less';

import Balance from '@components/Balance'
import Activity from '@components/Activity'

const DashboardBox = () => {
    return(
        <div className={style.dashboard_box}>
            <div className={style.dashboard_box__desktop}>
                To remake
            </div>
            <div className={style.dashboard_box__activity}>
            <div className={style.dashboard_box__activity_box}>
                <Activity activityList={[]} />
            </div>
                <Balance />
            </div>
        </div>
    )
}

export default DashboardBox;