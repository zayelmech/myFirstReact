//const element = document.createElement('h1');
//element.innerText = 'Hello_, Platzi Badges !';
//const container = document.getElementById('app');
//container.appendChild(element);


import React from 'react';
import ReactDOM from 'react-dom'


//const element= React.createElement('a',{href:'https://www.imecatro.com'},'Hola soy los children');


const nombreFunction = ()=>{
    const name = 'Abdiel';
    return name;
}
const elementReact = React.createElement('h2',{},`Hola, soy un h2 incrustado  ${1}`);
const elementJSX =
<div>
    <h1>Hello,Platzi Badges from React! {2+2}</h1>
    <p>Mi nombre es {nombreFunction()} </p>
    {elementReact}
</div>;
//El profe no recomienda usar React Element, Es mejor usar JSX forever 
const container =document.getElementById('app');


ReactDOM.render(elementJSX, container);
