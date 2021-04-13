import React from 'react';
import confLogo from '../images/platziconf-logo.svg';
import {  Link } from "react-router-dom";
import Badge from "../components/Badge";
import '../components/styles/BadgeDetails.css';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
function useIncreaseCount(max) {
    const [count,setCount]=React.useState(0);
    if (count>max ) {
        setCount(0);
        
    }
    return [count,setCount];
}

const BadgeDetails = (props) => {
   const [count,setCount]=useIncreaseCount(4);
    //const count =3;
   const  badge= props.badge;
    return (
        <React.Fragment>
        <div className="BadgeDetails__hero">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={confLogo} alt="Logo de la conferencia"/>
                    </div>
                    <div className="col-6">
                        <h1>{badge.firstName} {badge.lastName}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                <Badge 
                    firstName={badge.firstName}
                    lastName={badge.lastName}
                    email={badge.email}
                    twitter={badge.twitter}
                    jobTitle={badge.jobTitle}
                />

                </div>
                <div className="col">
                    <h2>Actions</h2>
                    <div>
                        <button onClick={()=>{
                            setCount(count+1);
                        }} className="btn btn-primary mr-4">
                            Incrementar conteo: {count}
                        </button>
                        <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                            Editar    
                        </Link>
                    </div>
                    <div>
                        <button  onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                        <DeleteBadgeModal
                         isOpen={props.modalIsOpen} 
                         onClose={props.onCloseModal}
                         onDeleteBadge={props.onDeleteBadge} />
                        
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default BadgeDetails;
