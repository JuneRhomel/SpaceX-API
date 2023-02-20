import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../Contexts/DataContext';
import List from './List'


export default function Main() {
    let dataList = useContext(DataContext)
    const [alldata, setAllData] = useState(dataList)
    console.log(alldata)

    useEffect(() => {
        setAllData(dataList);
    }, [dataList]);


    const fillterSearch = (e) => {

        const search = e.target.value.toLowerCase()
        const filtered = dataList.filter(i => i.mission_name.toLowerCase().includes(search))
        setAllData(filtered)
    }
    return (
        <div className='Main'>
            <div className='Search'>
                <input type="text" placeholder='Search...' onChange={(e) => fillterSearch(e)} />
            </div>
            <div className='all-list' >
                {alldata?
                    alldata.map((item) => {
                            return (
                                <List {...item} key={item.mission_name} />
                            )
                        })
                    :
                    <h4>loading...</h4>
                }

            </div>

        </div>
    )
}
