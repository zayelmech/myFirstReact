import React from 'react';
import './styles/BadgesList.css';
import { Link} from "react-router-dom";
class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return(
                <div>
                    <h3>No encontramos ningún badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Crear nuevo badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return (
                        <li key={badge.id}>
                            <div className="badge">
                                <div className="badge_header">
                                    <img src={badge.avatarUrl} alt="Logo" className="badge_avatar"/>
                                
                                    <div className="badge_section-info">
                                        <div className="badge_section-name">
                                            <h1 className="">{badge.firstName} {badge.lastName} </h1>                                          
                                        </div>
                                        <a href={`https://twitter.com/${badge.twitter}`}><span></span>@{badge.twitter} </a>
                                            <h3>{badge.jobTitle}</h3>    
                                    </div>
                                </div>
                            </div>
                        </li>
               
                        )
                    })}
             </ul>
        );
    }
}

export default BadgesList
