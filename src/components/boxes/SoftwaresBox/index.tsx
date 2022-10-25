import { useState } from 'react';

import styles from './style.less';

import { ISoftwareCard, ISoftwareInfo } from '@apptypes/Software';

import SoftwareCard from '@components/SoftwareCard';
import SoftwareInfo from '@components/SoftwareInfo';

import ytImage from '@images/mocks/ytsoft.png'
import tgImage from '@images/mocks/tgsoft.png'
import twitchImage from '@images/mocks/twitchsoft.png'
import vkImage from '@images/mocks/vksoft.png'


const SoftwaresBox = () => {

    const softwaresMock = [
        {
            id: 1,
            avatar: ytImage,
            name: "YouTube SoftWare",
            status: "avalible",
            reliaseDate: "01.07.2021"
        },
        {
            id: 2,
            avatar: tgImage,
            name: "Telegram SoftWare",
            status: "avalible",
            reliaseDate: "01.07.2021"
        },
        {
            id: 3,
            avatar: twitchImage,
            name: "Twitch SoftWare",
            status: "not avalible",
            reliaseDate: "01.07.2021"
        },
        {
            id: 4,
            avatar: vkImage,
            name: "VKontakte SoftWare",
            status: "testing",
            reliaseDate: "01.07.2021"
        }
    ]

    const softwareInfoMock: ISoftwareInfo[] = [
        {
            id: 1,
            assets: [
                'https://i.ibb.co/g7K0C4F/image-4.png',
                'https://i.ibb.co/g7K0C4F/image-4.png',
                'https://i.ibb.co/g7K0C4F/image-4.png',
                'https://i.ibb.co/g7K0C4F/image-4.png'
            ],
            description: `YouTube software v. 1.0.1 this is  
            a multi-threaded program designed to collect mail from 
            YouTube accounts. You will be able to collect a large 
            number of mails for different purposes at high speed, 
            as an example for sending advertisements.`,
            functions: [
                '2 modes of operation via API and direct',
                'Server list parsing',
                'Send messages to private messages and groups',
                'Online request processing',
                'Account Registrar via API',
                'Mobile proxy support',
                'Convenient and modern interface'
            ],
            prices: [
                {
                    cost: 10,
                    time: 7,
                },
                {
                    cost: 25,
                    time: 30,
                },
                {
                    cost: 35,
                    time: 60,
                },
            ]
        }
    ]

    const [softwares, setSoftwares] = useState<ISoftwareCard[] | []>(softwaresMock);

    return(
        <div className={styles.softwares_box}>
            <aside className={styles.softwares_box__menu}>
                <div className={styles.softwares_box__head}>
                    <h3>
                        Softwares
                    </h3>
                    <div>ico</div>
                </div>
                <ul className={styles.softwares_box__softlist}>
                    {
                        softwares.map((software, idx) => {
                            const {avatar, name, status, reliaseDate} = software;
                            return(
                                <li key={idx}>
                                    <SoftwareCard avatar={avatar} name={name} status={status} reliaseDate={reliaseDate}  />
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
            <div className={styles.softwares_box__softinfo}>
                <SoftwareInfo 
                    id={softwareInfoMock[0].id} 
                    assets={softwareInfoMock[0].assets} 
                    description={softwareInfoMock[0].description} 
                    prices={softwareInfoMock[0].prices}
                    functions={softwareInfoMock[0].functions}
                />
            </div>
        </div>
    )
}

export default SoftwaresBox;