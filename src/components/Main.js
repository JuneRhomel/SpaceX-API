import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../Contexts/DataContext';
import List from './List'


export default function Main() {
    const dataList = useContext(DataContext)
    const [data, setData] = useState(dataList)
    const myElementRef = useRef(null);

    const fillterSearch = (e) => {
        const search = e.target.value.toLowerCase()
        const filtered =  dataList.filter(i => i.mission_name.toLowerCase().includes(search))
        setData(filtered)
    }
    return (
        <div className='Main'>
            <div className='Search'>
                <input type="text" placeholder='Search...' onChange={(e) => fillterSearch(e)} />
            </div>
            <div className='all-list' >
                {data.map((item) => {

                    return (
                        <List {...item} key={item.mission_name} />
                    )
                })}
            </div>

        </div>
    )
}
