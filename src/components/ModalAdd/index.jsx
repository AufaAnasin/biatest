import { Modal } from 'react-bootstrap'
import Datepicker from '../Datepicker'
import styles from './ModalAdd.module.css'

function ModalAdd({show, handleClose}) {

  return (
    <Modal show={show} onHide={handleClose} className={styles.customModal}>
        <Modal.Body>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Nama</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ex: Muhammad Sumbul" />
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Alamat</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Jl. Kemang V Gg. Kenangan" />
        </div>
        <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">Jenis Kelamin</label>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Pria
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Wanita
            </label>
        </div>
        </div>
        <Datepicker />
        </Modal.Body>
      </Modal>
  )
}

export default ModalAdd