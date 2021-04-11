import React from 'react';
import "./styles/Badges.css"
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
    render(){
        return(
                <div className="badge">
                    <div className="badge_header">
                        <img  src={confLogo} alt="logo de la conferencia"/>
                    </div>
                    <div className="badge_section-name">
                        <img className="badge_avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                        <h1>Abdiel <br/>Carreño</h1>
                    </div>
                    <div className="badge_section-info">
                        <h3>Ingeniero Mecatrónico</h3>
                        <div>@abdielcro</div>
                    </div>
                    <div className="badge_footer">#platziconf</div>
                </div>
        )
    }
}

export default Badge;