import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearchString, getGlobalSearchStringValue } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');
  const globalSearchStringValue = useSelector(getGlobalSearchStringValue);
  
  useEffect(() => {
    setSearchString(globalSearchStringValue);
  }, [globalSearchStringValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString( searchString ));
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