import axios from 'axios'
import { format } from 'date-fns'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDateContext } from '../../context/dateContext'
import Datepicker from '../Datepicker'
import styles from './ModalAdd.module.css'

function ModalAdd({show, handleClose}) {
    // value 
    const { selectedDate } = useDateContext() // context
    const [selectedRadio, setSelectedRadio] = useState(null)

    const handleRadioChange = (e) => {
        const selectedRadio = e.target.value
        setSelectedRadio(selectedRadio)
    }

    // form
    const [form, setForm] = useState({
        name: "",
        address:"",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]:value})
    }

    // record 

    // submit the form 
    const handleSubmit = (e) => {
        e.preventDefault()
        const currentTime = new Date();
        const api = 'https://653bcc9bd5d6790f5ec775c9.mockapi.io/api/v1/users';
        const data = { 
            name: form.name,
            address: form.address,
            sex: selectedRadio,
            birthdate: format(selectedDate, 'dd-MM-yyyy'),
            inputdate: format(currentTime, 'dd-MM-yyyy HH:mm')
        }
        axios
        .post(api, data)
        .then((res) => {
            if (res.status === 201) {
                console.log("Berhasil")
                console.log(res)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    

  return (
    <Modal show={show} onHide={handleClose} className={styles.customModal}>
        <Modal.Body>
            <form>
            <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Nama</label>
            <input type="text" className="form-control" name='name' onChange={handleChange} id="formGroupExampleInput" placeholder="Ex: Muhammad Sumbul" />
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Alamat</label>
            <input type="text" name='address' onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Jl. Kemang V Gg. Kenangan" />
        </div>
        <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">Jenis Kelamin</label>
        <div className="form-check">
            <input 
            className="form-check-input" 
            type="radio" 
            name="flexRadioDefault" 
            id="flexRadioDefault1"
            value="Pria"
            checked={selectedRadio === "Pria"}
            onChange={handleRadioChange} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Pria
            </label>
        </div>
        <div className="form-check">
            <input 
            className="form-check-input" 
            type="radio" 
            name="flexRadioDefault" 
            id="flexRadioDefault2" 
            value="Wanita"
            checked={selectedRadio === "Wanita"}
            onChange={handleRadioChange} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Wanita
            </label>
        </div>
        </div>
        <Datepicker />
        <button type='submit' onClick={handleSubmit}>Submit Form</button>
            </form>
        </Modal.Body>
      </Modal>
  )
}

export default ModalAdd