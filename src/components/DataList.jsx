import React from 'react'
import './DataList.css'

function DataList(props) {
    return (
        <div>
            <ul className='list'>
                {
                    props.items.map((item,index) => {
                        return <li className='list-item' key={index}>
                            <span className='list-item-text'>{item.info}</span> 
                            <span className='delete-item' onClick={()=>props.deleteItem(item.id)}>x</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default DataList;