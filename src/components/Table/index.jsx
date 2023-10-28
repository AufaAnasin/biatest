import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import ModalDelete from '../ModalDelete'
import styles from './Table.module.css'

function Table() {
    
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Number of items per page
    const [modalId, setModalId] = useState("");
    const [isShown, setIsShown] = useState(false)

    //data operation
    const getData = () => {
        const api = 'https://653bcc9bd5d6790f5ec775c9.mockapi.io/api/v1/users'
        axios.get(api)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    };

    const paginate = (data, currentPage, itemsPerPage) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
      };
      

    useEffect(() => {
        getData();
    }, []);
    const currentData = paginate(data, currentPage, itemsPerPage);

    // handle modal for delete etc
    const handleModal = (id) => {
        setIsShown(true)
        setModalId(id)
    }
    const handleClose = () => {
        setIsShown(false);
        setModalId(null);
      }
      const handleDelete = (id) => {
        axios.delete(`https://653bcc9bd5d6790f5ec775c9.mockapi.io/api/v1/users/${id}`,
        {
          headers: {
            // sesuaikan sama API
              'Content-Type': 'application/x-www-form-urlencoded',
              'access_token': localStorage.getItem('admin_token')
          }
        }).then((res) => {
          setIsShown(true);
          setModalId(null);
          getData();
          // setShowToast(true);
        }).catch((err) => console.log(err))
      }
    
      setTimeout(() => {
      }, 3000)
    

  return (
    <>
    <div className={styles.container}>
        {isShown && modalId !== null && (
            <ModalDelete
            show={isShown}
            modalId={modalId}
            handleClose={handleClose}
            deleteButton={handleDelete}
            />
        )}
        <table className={styles.table}>
            <thead>
            <tr>
                <th className={styles.first}>No. </th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Jenis Kelamin</th>
                <th>Tanggal Lahir</th>
                <th>Tanggal Input</th>
                <th className={styles.last}>Aksi</th>
            </tr>
            </thead>
            <tbody>
            {currentData.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.sex}</td>
                    <td>{item.birthdate}</td>
                    <td>{item.inputdate}</td>
                    <td>
                        <div className={styles.buttongroup}>
                        <button type="button" className="btn btn-outline-primary">View</button>
                        <button type="button" className="btn btn-outline-secondary">Update</button>
                        <button type="button" className="btn btn-outline-danger" onClick={() => handleModal(item.id)}>Delete</button>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
            <div className={styles.pagination}>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage * itemsPerPage >= data.length}>Next</button>
                </div>
        </table>
    </div>
    </>
  )
}

export default Table