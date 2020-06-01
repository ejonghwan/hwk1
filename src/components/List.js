import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
    render() {

        const { info, onRemove, onUpdate } = this.props;
        
        const list = info.map( val => {
            return <Item info={val} onRemove={onRemove} key={val.id} onUpdate={onUpdate}/>
        })

        return (
            <div>
                {list}
            </div>
        )
    }
}


export default List