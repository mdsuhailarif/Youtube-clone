import { IconButton, Paper } from '@mui/material';
import {Search} from '@mui/icons-material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const navigate = useNavigate();
    const [term,setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(term){
            navigate(`/search/${term}`);

            setTerm('');
        }
    }

    return(
    <Paper component='form'
        onSubmit={(e) => handleSubmit(e) }
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 }
        }}>
        <input className='search-bar' placeholder='search'
        value={term} onChange={(e) => setTerm(e.target.value) } />
        <IconButton type='submit' sx={{ p:'10px', color:'red' }}>
            <Search/>
        </IconButton>
    </Paper>
);
}

export default SearchBar