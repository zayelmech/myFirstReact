import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
    render(){
        return(
                <div>
                    <div>
                        <img src={confLogo} alt="logo de la conferencia"/>
                    </div>
                    <div>
                        <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                        <h1>Abdiel <br/>Carreño</h1>
                    </div>
                    <div>
                        <p>Ingeniero Mecatrónico</p>
                        <p>@abdielcro</p>
                    </div>
                </div>
        )
    }
}

export default Badge;