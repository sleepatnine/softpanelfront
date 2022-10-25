import React, { FC }  from 'react';

import styles from './style.less';

import { ISoftwareCard, Statuses } from '@apptypes/Software';

import classNames from 'classnames';

const SoftwareCard:FC<ISoftwareCard> = ({avatar, name, status, reliaseDate}) => {

    const statusClass = classNames(
        `${styles.software_card__status}`,
        {
            [styles.software_card__status_green]: status === Statuses.AVALIBLE,
            [styles.software_card__status_red]: status === Statuses.NOT_AVALIBLE,
            [styles.software_card__status_blue]: status === Statuses.TESTING,
        }
    )

    return(
        <div className={styles.software_card}>
            <div className={styles.software_card__avatar}>
                <img src={avatar} alt={''} />
            </div>
            <div className={styles.software_card__info}>
                <span className={styles.software_card__name}>
                    {name}
                </span>
                <span className={statusClass}>
                    {status}
                </span>
                <span className={styles.software_card__realise}>
                    Realise date: {reliaseDate}
                </span>
            </div>
        </div>
    )
}

export default SoftwareCard;