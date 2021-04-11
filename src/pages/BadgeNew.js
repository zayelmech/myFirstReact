import React from 'react';
//css
import './styles/BadgeNew.css'

//components
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
//imgs
import header from '../images/badge-header.svg';


class BadgeNew extends React.Component{
    render(){
        return (
                <div>
                    <Navbar />
                    <div className="BadgeNew__hero">
                        <img className="img img-fluid" src={header} alt="imagen"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Badge 
                                firstName="Abdiel" 
                                lastName="Carreño"
                                jobTitle="Ing. Mecatrónico" 
                                twitter="abdielcro"
                                urlPhoto="https://www.gravatar.com/avatar?d=identicon"
                                />
                            </div>
                            <div className="col-6">
                                <BadgeForm />
                            </div>
                        </div>
                    </div>
                </div>
        );

    }
        
}
export default BadgeNew;