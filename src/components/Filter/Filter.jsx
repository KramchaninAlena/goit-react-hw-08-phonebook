import { useDispatch } from 'react-redux';
import css from '../Filter/Filter.module.css'
import { filterContacts } from 'redux/filterSlice';
import { TextField } from '@mui/material';

export  function Filter() {
  const dispatch = useDispatch()
    const handleChange = ({target:{value}}) => {
      dispatch(filterContacts(value))
      };
  return (
    <div className={css.filter}>
    <TextField id="outlined-basic" label="Find contacts by name" variant="outlined" onChange={handleChange}
      type="text"
      name="filter"
      className={css.filterInput} sx={{ bgcolor: '#fffaf0'}}/>
    {/* <input onChange={handleChange}
      type="text"
      name="filter"
      className={css.filterInput}
      /> */}
      </div>
  )
}
