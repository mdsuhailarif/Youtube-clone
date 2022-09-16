import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchFromAPI } from '../Utils/fetchFromAPI';


import { Videos, ChannelCard} from './';

const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos,setVideos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        FetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetail(data?.items[0]));

        FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setVideos(data?.items));
    },[id]);

  return (
    <Box minHeight='95vh'>
        <Box>
            <Box sx={{
                background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
                zIndex: 10,
                height: {md:'200px', xs: '120px'}
            }}/>
            <ChannelCard channelDetail={channelDetail} mt={'-108px'}/>
        </Box>
        <Box display='flex' p='2'>
            <Box sx={{mr: {sm: '100px'}}}/>
                <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default ChannelDetail