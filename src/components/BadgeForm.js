import React, { Component } from 'react'

export class BadgeForm extends Component {
    handleChange= e =>{
        console.log({
            name: e.target.name,
            value: e.target.value});
    };
    handleClick= e =>{
        console.log("Button was click");
    };
    handleSubmit= e =>{
        e.preventDefault();
        console.log("Form was submit");
    };
    render() {
        return (
            <div>
               <h1>New Attendant</h1> 
               <form onSubmit={this.handleSubmit}> 
                    <div>
                        <label >First Name</label>
                        <input onChange={this.handleChange}className="form-control" type="text" name="firstName"></input>
                    </div>

                    <button onClick={this.handleClick} type="submit" className="btn btn-primary">Save</button>
                
               </form>
            </div>
        )
    }
}

export default BadgeForm
