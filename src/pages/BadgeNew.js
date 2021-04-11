import React from 'react';
//css
import './styles/BadgeNew.css'

//components
//import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
//imgs
import header from '../images/badge-header.svg';


class BadgeNew extends React.Component{
    state = {form:{
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    }};
    handleChange = e=>{
        //const nextForm = this.state.form;
        //nextForm[e.target.name] = e.target.value;
        console.log("something is changing");
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        });
    };
    render(){
        return (
                <React.Fragment>
                    
                    <div className="BadgeNew__hero">
                        <img className="img img-fluid" src={header} alt="imagen"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                urlPhoto="https://www.gravatar.com/avatar?d=identicon"
                                />
                            </div>
                            <div className="col-6">
                                <BadgeForm 
                                    onChange={this.handleChange}
                                    formValues={this.state.form}
                                    />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        );

    }
        
}
export default BadgeNew;