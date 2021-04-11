import React from 'react';

import './styles/BadgeNew.css'
import Navbar from '../components/Navbar';

import header from '../images/badge-header.svg';
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    render(){
        return (
                <div>
                    <Navbar />
                    <div className="BadgeNew__hero">
                        <img className="img-fluid" src={header} className="img"/>
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
                        </div>
                    </div>
                </div>
        );

    }
        
}
export default BadgeNew;