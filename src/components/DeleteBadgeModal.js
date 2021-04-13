import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal (props) {
    return <Modal 
    onClose={props.onClose}
    isOpen ={props.isOpen}>
        <div className="DeleteBadgeModal">
            <h1>ESTAS SEGURO?</h1>
            <p>Estas a punto de borrar este badge</p>
            <div className="">
                <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Borrar</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancelar</button>
            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal;

