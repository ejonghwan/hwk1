import React, { Component } from 'react'

class Item extends Component {

    state = {
        updateBox: false,
        name: '',
        password: '',
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }


    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id)
    }

    handleUpdate = () => {
        const { info, onUpdate } = this.props;
        this.setState({
            updateBox: !this.state.updateBox
        })
        onUpdate(info.id)

        console.log(this.state.updateBox)
    }

    render() {

        const { info, updateBox } = this.props;
        return (
            <div>
                {this.state.updateBox ? 
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            onChange={this.handleChange} 
                            value={this.state.name} 
                            name="name"
                        />
                        <input 
                            onChange={this.handleChange} 
                            value={this.state.password} 
                            name="password"
                        />
                    </form>
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