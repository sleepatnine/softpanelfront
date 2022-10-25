import style from './style.less';

import { FC } from 'react';
import Slider from 'react-slick';

import DescriptionTitle from '@components/DescriptionTitle';

import { ISoftwareInfo } from '@apptypes/Software';


const SoftwareInfo:FC<ISoftwareInfo> = ({assets, description, functions, prices}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return(
        <div className={style.software_info}>
            <h2 className={style.software_info__name}>
                YouTube SoftWare
            </h2>
            <Slider className={style.software_info__slider} {...settings}>
                {assets.map((asset, idx) => {
                    return(
                        <div className={style.software_info__slides} key={idx}>
                            <img src={asset} alt='asd' />
                        </div>
                    )
                })}
            </Slider>
            <div className={style.software_info__table}>
                <div className={style.software_info__functions}>
                    <DescriptionTitle title='Functions' />
                    <ul className={style.software_info__funclist}>
                        {
                            functions.map((func, idx) => {
                                return(
                                    <li className={style.software_info__func} key={idx}>
                                        {func}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={style.software_info__row}>
                    <div className={style.software_info__col}>

                    </div>
                    <div className={style.software_info__col}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftwareInfo;


