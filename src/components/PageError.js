import React from 'react';
import './styles/PageError.css';
import LogoError from '../images/img404.webp';

export default function PageError(props) {
    return (
        <div className="PageError">
            <img className="imgError" src={LogoError} alt="Imagen de Error"/>
            {props.error.message}
        </div>
    )
}
