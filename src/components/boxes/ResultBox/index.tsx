import styles from './style.less'

import { FC, useEffect, useState } from 'react'

import {IResultData} from '@apptypes/ResultData'

import ResultLine from '@components/ResultLine'
import Checkbox from '@components/CheckBox'
import TableTitle from '@components/TableTitle'
import ResultsGrids from '@components/layout/ResultsGrids'



const ResultsBox: FC = () => {
    const [selectedAllCheck, setSelectedAllCheck] = useState(false)
    const [results, setResults] = useState<IResultData[]>([])

    const handleChange = (id: number) => {
        ///// тип в скобках?
        let chooseAll: IResultData[] = []
        chooseAll = results.map((result) => {
            /////////////////////////////////////////////// elem ??????????
            if (result.id == id) {
                /// всем элементам названия
                return {
                    ...result,
                    isChecked: !result.isChecked,
                }
            }
            return result
        })
        setResults(chooseAll)
    }

    const titleChecked = () => {
        let chooseAll = []
        chooseAll = results.map((elem) => {
            return {
                ...elem,
                isChecked: !selectedAllCheck,
            }
        })
        setResults(chooseAll)
        setSelectedAllCheck(!selectedAllCheck)
    }

    const columns = [
        /// titleColumns headerColumns
        {
            name: 'ID',
            sortFunction: () => {},
            width: 106,
        },
        {
            name: 'SoftWare',
            width: 135,
        },
        {
            name: 'Date',
            sortFunction: () => {},
            width: 152,
        },
        {
            name: 'Process',
            sortFunction: () => {},
            width: 265,
        },
        {
            name: 'Actions',
            width: 150,
        },
    ]

    const mokResults: IResultData[] = [
        {
            id: 1,
            avatar: 'url',
            date: '02.01.2022 16:33',
            isChecked: false,
            progress: 50,
            showUrl: 'dfsfd',
            downloadUrl: 'asdasd',
        },

        {
            id: 2,
            avatar: 'url',
            date: '02.01.2022 16:33',
            isChecked: false,
            progress: 80,
            showUrl: 'dfsfd',
            downloadUrl: 'asdasd',
        },
        {
            id: 3,
            avatar: 'url',
            date: '02.01.2022 16:33',
            isChecked: false,
            progress: 30,
            showUrl: 'dfsfd',
            downloadUrl: 'asdasd',
        },
    ]

    useEffect(() => {
        setResults(mokResults)
    }, [])

    return (
        <div className={styles.results_box}>
            <div className={styles.results_box__head}>
                <ResultsGrids>
                    <Checkbox
                        handleChange={titleChecked}
                        isChecked={selectedAllCheck}
                    />
                    {columns.map((column) => {
                        const { name, sortFunction } = column
                        return (
                            <TableTitle
                                name={name}
                                sortFunction={sortFunction}
                            />
                        )
                    })}
                </ResultsGrids>
            </div>
            {results.map((result) => {
                return (
                    <div className={styles.results_box__head}>
                        <ResultLine
                            {...result}
                            handleChange={() => {
                                handleChange(result.id)
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ResultsBox
