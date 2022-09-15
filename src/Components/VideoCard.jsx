import { Box } from '@mui/material';
import React from 'react';


const VideoCard = ({video}) => {
  return (
    <Box>
        <img src={video.snippet.thumbnails.default.url} alt="thumbnail" />
    </Box>
  )
}

export default VideoCard