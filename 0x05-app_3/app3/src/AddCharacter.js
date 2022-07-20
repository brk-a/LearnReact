import React, {Component} from "react";

class AddCharacter extends Component{
    state = {
       name: null,
       age: null
    }

    handleChange = (e) => {
       this.setState({
            [e.target.id]: e.target.value
       });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addCharacter(this.state);
    }

    render() {
        return(
           <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text"  id="name" onChange={this.handleChange}/>
            <label htmlFor="age">Age: </label>
            <input type="text" id="age" onChange={this.handleChange}/>
            <button>Submit</button>
           </form>
        );
    }
}

export default AddCharacter