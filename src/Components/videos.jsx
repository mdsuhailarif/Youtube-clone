import { Box, Stack } from '@mui/material';
import React from 'react';

import {VideoCard,ChannelCard} from './';

const videos = ({videos}) => {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent= 'flex-start' gap={2}>
        {videos.map((item,index) => (
            <Box key={index}>
                {item.id.videoId&& <VideoCard video={item} /> }
                {item.id.channelId&& <ChannelCard channelDetail={item} /> }
            </Box>
        ))}
    </Stack>
  )
}

export default videos