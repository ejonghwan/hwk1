import React, { Component } from 'react'

class Item extends Component {

    state = {
        updateBox: !false,
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id)
    }

    handleUpdate = () => {
        const { info, onUpdate } = this.props;
        
        onUpdate(info.id)

        console.log(this.state.updateBox)
        
    }

    render() {

        const { info, updateBox } = this.props;
        return (
            <div>
                {this.state.updateBox ? 
                    <div>
                        <input />
                        <input />
                    </div>
                    :
                    <div>{info.name}{info.password}</div>
                } 
                <button onClick={this.handleRemove}>remove</button>
                <button onClick={this.handleUpdate}>updete</button>
            </div>
        )
    }
}


export default Item;