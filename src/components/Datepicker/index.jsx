import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Datepicker.module.css'
import { useDateContext } from '../../context/dateContext'


function CustomCalendarInput({value, onClick}) {
    return (
        <div className="input-group">
            <input type="text" className="form-control" value={value} onClick={onClick} readOnly/>
            <div className="input-group-append">
                <span className={`input-group-text ${styles.customdatepicker}`}>
                    <label>
                        <FontAwesomeIcon icon='fa-regular fa-calendar' />
                    </label>
                </span>
            </div>
        </div>
    )
}

function Datepicker() {
    const { selectedDate, setDate } = useDateContext() // context

  return (
    <>
        <div className={`mb-3 ${styles.customdategroup}`}>
                <label htmlFor="formGroupExampleInput" className="form-label">Tanggal Lahir</label>
                <ReactDatePicker 
                // selected={dateInputValue} 
                value={selectedDate}
                onChange={(date) => setDate(date)} 
                customInput={<CustomCalendarInput />} />
        </div>
    </>
  )
}

export default Datepicker