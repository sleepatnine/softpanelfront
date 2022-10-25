import { FC } from 'react'

import { IResultData } from '@apptypes/ResultData'

import Checkbox from '@components/CheckBox'
import ProgressBar from '@components/ProgressBar'
import ResultsGrids from '@components/layout/ResultsGrids'
import ActionsResult from '@components/UserAction'

import EyeIcon from '@images/eyeshow.png'
import DownloadIcon from '@images/download.png'

const ResultLine: FC<IResultData> = ({ ////// Iresult
    id,
    avatar,
    progress,
    handleChange,
    isChecked,
    date,
    downloadUrl,
}) => {
    return (
        <ResultsGrids>
            <Checkbox handleChange={handleChange} isChecked={isChecked} />
            <div>{id}</div>
            <div>{avatar}</div>
            <div>{date}</div>
            <ProgressBar progress={progress}></ProgressBar>
            <ActionsResult name={'show'} url={EyeIcon}></ActionsResult>
            <ActionsResult name={'download'} url={DownloadIcon}></ActionsResult>
        </ResultsGrids>
    )
}

export default ResultLine
