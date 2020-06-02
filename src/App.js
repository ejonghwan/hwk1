import React, { Component } from 'react';
import './App.css';
import List from './components/List'



class App extends Component {
    
    id = 0;
    state = {
        name: '',
        password: '',
        info: [],
    }

    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            info: this.state.info.concat({
                name: this.state.name,
                password: this.state.password,
                id: this.id,
            }),
            name: '',
            password: '',
        })
        this.id++
    }

    handleRemove = (id) => {
        this.setState({
            info: this.state.info.filter( val => val.id !== id)
        })
    }

    handleUpdate = (id, item) => {
        this.setState({
            info: this.state.info.map( val => {
                if(val.id === id) {
                    return {
                        ...val,
                        name: item.name,
                        password: item.password,
                    }
                } else {
                    return val
                }
            })
        })
    }

    render(){

      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChange} 
                    name="name" 
                    value={this.state.name}
                />
                <input 
                    onChange={this.handleChange} 
                    name="password" 
                    value={this.state.password}
                />
                <button type="submit">add</button>
            </form>
            {/* {JSON.stringify(this.state.list)} */}
            <List 
                info={this.state.info} 
                onRemove={this.handleRemove} 
                onUpdate={this.handleUpdate}
            />
        </div>
      );
    }
}

export default App;
