import React, { Component } from 'react'

class Item extends Component {

    state = {
        updateBox: false,
        name: '',
        password: '',
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     if(this.state.info !== nextProps) {
            
    //     }
    // }

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
        const { info } = this.props;

        
        this.setState({
            updateBox: !this.state.updateBox
        })

        this.setState({
            name: info.name,
            password: info.password,
        })
        console.log(this.state.updateBox)
    }

    handleCompl = (e) => {
        const { info, onUpdate } = this.props;
        this.setState({
            updateBox: !this.state.updateBox
        })
        this.setState({
            name: info.name,
            password: info.password,
        })
        
        onUpdate(info.id, {name: this.state.name, password: this.state.password})
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
                    <div>name: {info.name}<br />password: {info.password}</div>
                } 
                <button onClick={this.handleRemove}>remove</button>
                {
                    this.state.updateBox ? 
                    <button onClick={this.handleCompl}>ok</button>
                    :
                    <button onClick={this.handleUpdate}>update</button>
                }
                
            </div>
        )
    }
}


export default Item;