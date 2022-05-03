import React from 'react';
import styled from '@mui/material/styles/styled';
import { DashboardBread, StyledPaper } from '../components/Dashboard';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

// icons
import BookIcon from '@mui/icons-material/Book';

const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '100%',


        '& .user-profile-con': {
            display: 'flex',
            alignItems: 'center',

            '& .profile-text-con': {
                marginLeft: theme.shape.borderRadius
            },

            '& .user-name': {
                fontWeight: theme.typography.fontWeightMedium
            }
        },


        '& .blog-des-con': {
            marginTop: theme.shape.borderRadius
        }
    }
}))

function BlogPage() {

    return (
        <Root>
            <DashboardBread
                title="Blog Edit"
                icon={<BookIcon />}
                menu1="Blog"
                menu2="Edit"
            />

            <StyledPaper>
                <div className='user-profile-con'>
                    <Avatar alt="user profile image" />

                    <div className="profile-text-con">
                        <Typography className='user-name'>Romdon Uma</Typography>
                        <Typography
                            className='updated-date'
                            variant="caption"
                        >21 dec 2022</Typography>
                    </div>
                </div>

                <form className='blog-des-con'>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Title' />
                        </Grid>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Category' />
                        </Grid>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Slug' />
                        </Grid>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Status' />
                        </Grid>
                    </Grid>
                </form>
            </StyledPaper>
        </Root>
    )
}

export default BlogPage