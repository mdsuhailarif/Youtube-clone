import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import {Videos} from './';
import { FetchFromAPI } from '../Utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const {term} = useParams();

    useEffect(() => {
        FetchFromAPI(`search?part=snippet&q=${term}`)
        .then((data) => setVideos(data.items))
    },[term]);

    return (
        <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant='h5' fontWeight='bold' mb={2}
                    sx={{
                        color: 'white'
                    }}> 
                    Search Results for:
                    <span style={{ color: '#F31503' }}> {term}</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
    )
}

export default SearchFeed