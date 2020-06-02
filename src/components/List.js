import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
    render() {

        const { info, onRemove, onUpdate, updateBox } = this.props;
        
        const list = info.map( val => {
            return <Item info={val} onRemove={onRemove} key={val.id} onUpdate={onUpdate} updateBox={updateBox}/>
        })

        return (
            <div>
                {list}
            </div>
        )
    }
}


export default List