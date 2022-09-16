import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../Utils/Constants';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card sx={{width: { xs: '100%',md: '320px', sm: '358px'},}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx ={{width: { xs: '92vw', sm: '358px'}, height: '180px'}}
                />
                <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                        <Typography variant='subtitle1' fontWeight='bold' color='#fff' >
                            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                        <Typography variant='subtitle2' fontWeight='bold' color='dray'>
                            {snippet?.channelTitle || demoChannelTitle}
                            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}}/>
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    )
}

export default VideoCard