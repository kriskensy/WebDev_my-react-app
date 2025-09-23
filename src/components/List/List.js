import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import styles from './List.module.scss';
import { useSelector } from 'react-redux';
import { getListById, getColumnsByLists } from '../../redux/store';

const List = () => {

  const columns = useSelector(state => getColumnsByLists(state, 1));
  const listData = useSelector(state => getListById(state, 1));

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}> {listData.title} <span>soon</span></h2>
      </header>
        <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} {...column}/>)}
      </section>
      <ColumnForm/>
    </div>
  );
};

export default List;