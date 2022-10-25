import React, { FC } from 'react';

import style from './style.less'

import { IDescriptionTitle } from '@apptypes/Software';

const DescriptionTitle:FC<IDescriptionTitle> = ({title}) => {
    return(
        <span className={style.description_title}>
            {title}:
        </span>
    )
}

export default DescriptionTitle;