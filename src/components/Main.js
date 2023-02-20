import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Contexts/DataContext';
import List from './List'


export default function Main() {
    const  dataList = useContext(DataContext)



    return (

        <div className='Main'>
            <div className='Search'>
                <input type="text" placeholder='Search...' />
            </div>
            <div className='all-list'>
                {dataList.map((item) =>{
                    return(
                        <List {...item} />
                    )
                })}
            </div>

        </div>
    )
}
