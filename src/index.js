//const element = document.createElement('h1');
//element.innerText = 'Hello_, Platzi Badges !';
//const container = document.getElementById('app');
//container.appendChild(element);


import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

import Badge from './components/Badge';
import BageNew from './pages/BadgeNew';
import  Badges from './pages/Badges';

//const element= React.createElement('a',{href:'https://www.imecatro.com'},'Hola soy los children');

/*
const nombreFunction = ()=>{
    const name = 'Abdiel';
    return name;
}
const elementReact = React.createElement('h2',{},`Hola, soy un h2 incrustado  ${1}`);//this is a React element

const elementJSX =
                <div>
                    <h1>Hello,Platzi Badges from React! {2+2}</h1>
                    <p>Mi nombre es {nombreFunction()} </p>
                    {elementReact}
                    {<Badge />}
                </div>;
*/
let elementJSX;
const caso=3;
switch (caso) {
    case 1:
        elementJSX = <Badge 
            firstName="Abdiel" 
            lastName="Carreño"
            jobTitle="Ing. Mecatrónico" 
            twitter="abdielcro"
            urlPhoto="https://www.gravatar.com/avatar?d=identicon"
            />;    
        break;
    case 2:
        elementJSX= <BageNew />;
        break;
    case 3:
        elementJSX= <Badges />;
        break;
    default:
        break;
} 

//El profe no recomienda usar React Element, Es mejor usar JSX forever 
const container =document.getElementById('app');


ReactDOM.render(elementJSX, container);
