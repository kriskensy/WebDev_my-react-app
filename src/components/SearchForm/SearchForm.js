import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString( searchString ));
    setSearchString('');
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput 
        placeholder='Search...'
        value={searchString}
        onChange={e => setSearchString(e.target.value)}/>
      <Button type="submit">
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;