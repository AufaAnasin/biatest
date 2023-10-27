import dataset from '../../data/dataset'
import styles from './Table.module.css'

function Table() {
  return (
    <>
    <div className={styles.container}>
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
            {dataset.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.birthdate}</td>
                    <td>{item.inputdate}</td>
                    <td>
                        <div className={styles.buttongroup}>
                        <button type="button" className="btn btn-outline-primary">View</button>
                        <button type="button" className="btn btn-outline-secondary">Update</button>
                        <button type="button" className="btn btn-outline-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Table