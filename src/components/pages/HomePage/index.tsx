import React from 'react';

import style from './style.less';

import MainLayout from '@layot/MainLayout';
import Desktop from '@components/Desktop';

const HomePage = () => {
    return(
        <div className={style.home_page}>
            <MainLayout>
                <Desktop />
            </MainLayout>
        </div>
    )
}

export default HomePage;