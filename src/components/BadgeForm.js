import React, { Component } from 'react'

export class BadgeForm extends Component {
    //state = {};

    handleChange = e => {
        //console.log({
            //name: e.target.name,
            //value: e.target.value});
            this.setState({
                [e.target.name]: e.target.value
            });
            
    };
    handleClick= e =>{
        console.log("Button was click");
    };
/*    handleSubmit= e =>{
        e.preventDefault();
        console.log("Form was submit");
    };*/

    render() {
        return (
            <div>
               <h1>New Attendant</h1> 
               <form onSubmit={this.props.onSubmit}> 
                    <div className="form-group">
                        <label >First Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control" 
                            placeholder="escribe tu nombre" 
                            type="text"
                            name="firstName" 
                            value={this.props.formValues.firstName}
                            />
                        <div className="form-group">
                            <label >Last Name</label>
                            <input 
                                onChange={this.props.onChange}
                                className="form-control" 
                                placeholder="escribe tu apellido" 
                                type="text"
                                name="lastName" 
                                value={this.props.formValues.lastName}/>
                        </div>
                        <div className="form-group">
                            <label >E-Mail</label>
                            <input 
                                onChange={this.props.onChange}
                                className="form-control"
                                placeholder="escribe tu email" 
                                type="email" 
                                name="email" 
                                value={this.props.formValues.email}/>
                        </div>
                        <div className="form-group">
                            <label >Job Tittle</label>
                            <input 
                                onChange={this.props.onChange}
                                className="form-control" 
                                placeholder="escribe tu titulo de trabajo" 
                                type="text" 
                                name="jobTitle" 
                                value={this.props.formValues.jobTitle}/>
                        </div>
                        <div className="form-group">
                            <label >Twitter</label>
                            <input 
                                onChange={this.props.onChange}
                                className="form-control" 
                                placeholder="escribe tu twitter" 
                                type="text" 
                                name="twitter" 
                                value={this.props.formValues.twitter}/>
                        </div>
                    </div>

                    <button onClick={this.handleClick} type="submit" className="btn btn-primary">Save</button>
                    {this.props.error && (
                        <p className="text-danger">{ this.props.error.message}</p>
                    )}
               </form>
            </div>
        )
    }
}

export default BadgeForm
