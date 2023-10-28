import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import deleteIll from '../../components/illustration/deleted.png'
import styles from './ModalDelete.module.css'

function ModalDelete({show, handleClose, modalId, deleteButton}) {
  return (
    <Modal show={show} onHide={handleClose}>
        <div className={styles.modals}>
            <img src={deleteIll} alt='delete' />
            <h3>Are You Sure?</h3>
            <h4>Do you really want to delete these records? This process cannot be undone.</h4>
            <div className={styles.buttongroup}>
                <button onClick={() => deleteButton(modalId)} className="btn btn-danger">Delete</button>
                <button onClick={handleClose} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    </Modal>
  )
}

export default ModalDelete