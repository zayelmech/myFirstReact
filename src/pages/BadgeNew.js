import React from 'react';
//css
import './styles/BadgeNew.css';

//components
//import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
//imgs
import header from '../images/platziconf-logo.svg';

//api
import api from '../api';

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
        console.log(this.state.form.firstName);
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        });
    };
    handleSubmit=async(e) =>{
        e.preventDefault();
        this.setState({ loading: true, error:null})
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false, error:null});
            console.log("Form was submit");
        } catch (error) {
            this.setState({ loading: false, error:error})
        }
        
        

    };
    render(){
        return (
                <React.Fragment>
                    
                    <div className="BadgeNew__hero">
                        <img className="img img-fluid BadgeNew__hero-image" src={header} alt="imagen"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Badge 
                                firstName={this.state.form.firstName || 'Nombre'}
                                lastName={this.state.form.lastName || 'Apellido'}
                                jobTitle={this.state.form.jobTitle || 'Trabajo'}
                                twitter={this.state.form.twitter || 'twitter'}
                                email={this.state.form.email || "gmail.com"}
                                />
                            </div>
                            <div className="col-6">
                                <BadgeForm 
                                    onChange={this.handleChange}
                                    onSubmit={this.handleSubmit}
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