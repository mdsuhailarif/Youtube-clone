import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoProfilePicture } from '../Utils/Constants'

const ChannelCard = ({ channelDetail }) => {
    return (
        <Box sx={{ boxShadow: 'none', borderRadius: '20px', width: { md: '320px', xs: '356px' },height : '326px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff' }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px solid' }}
                    />
                    <Typography variant='h6'>
                        {channelDetail?.snippet?.title || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography variant='h6'>
                            {parseInt(channelDetail?.statistics?.subscriberCount.toLocaleString())}
                            Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard