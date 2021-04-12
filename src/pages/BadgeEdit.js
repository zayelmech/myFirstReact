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
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component{
    state = {
        loading:true,
        error:null,
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:'',
            }
        };
    componentDidMount(){
        this.fetchData();
        }
    fetchData=async(e)=>{
        this.setState({ loading: true, error:null});
        try {
            const data =await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, form:data}

            );
        } catch (error) {
            this.setState({ loading: false, error:error});
        }
    }    
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
            await api.badges.update(this.props.match.params.badgeId,this.state.form);
            this.setState({ loading: false, error:null});
            console.log("Form was submit");
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error:error})
        }
        
        

    };
    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        
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
                            <h1>Editar</h1> 
                                <BadgeForm 
                                    onChange={this.handleChange}
                                    onSubmit={this.handleSubmit}
                                    formValues={this.state.form}
                                    error={this.state.error}
                                    />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        );

    }
        
}
export default BadgeEdit;