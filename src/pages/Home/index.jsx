import { useState } from 'react';
import ModalAdd from '../../components/ModalAdd';
import Table from '../../components/Table'
import styles from '../Home/Home.module.css'

function Home() {

  // for add modal
  const [isShow, setIsShow] = useState(false);

  const handleModal = () => {
    setIsShow(true)
  }

  const handleClose = () => {
    setIsShow(false)
  }
  return (
    <>
    <div className="container">
        <button type="button" className={`btn btn-outline-primary ${styles.customButton}`} onClick={handleModal}>Add Users</button>
        {isShow && (
          <ModalAdd show={isShow} handleClose={handleClose} />
        )}
        <Table />
    </div>
    </>
  )
}

export default Home