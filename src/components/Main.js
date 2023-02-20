import React, { useContext, useState } from 'react'
import { DataContext } from '../Contexts/DataContext';
import List from './List'


export default function Main() {
    const data = useContext(DataContext);


    return (
        <div className='Main'>
            <div className='Search'>
                <input type="text" placeholder='Search...' />
            </div>
            <div className='all-list'>
                {data.map((item) =>{
                    return(
                        <List {...item} />
                    )
                })}
            </div>

        </div>
    )
}
