import React from 'react';
import styled from '@mui/material/styles/styled';
import { DashboardBread, StyledPaper } from '../components/Dashboard';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as signalR from '@microsoft/signalr';
import Button from '@mui/material/Button';

// icons
import BookIcon from '@mui/icons-material/Book';

// services
import addScriptTag from '../services/element/addScriptTag';
import addLinkTag from '../services/element/addLinkTag';

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
    const [con, setCon] = React.useState(null);
    const [text, setText] = React.useState({
        title: '',
        slug: ''
    });

    const connectToSignalR = React.useCallback(() => {
        const connection = new signalR.HubConnectionBuilder().withUrl('http://localhost:5000/blogHub').build();

        connection.start().then(() => {
            console.log('connected')

            // if connected then set the signalR
            setCon(connection);

        }).catch(err => {
            console.log(err)
        })
    }, [setCon]);


    const handleMsgReceived = React.useCallback(() => {
        con.on("ReceiveMessage", (user, message) => {
            let li = document.createElement('li');
            document.getElementById('received-message').appendChild(li);
            li.textContent = `Blog: ${user} with slug: ${message}`;
        })
    });



    // initialize the signalR and set to the state
    React.useEffect(() => {
        connectToSignalR();
    }, [connectToSignalR]);


    // get or receive the data from signal r
    React.useEffect(() => {

        if (con) {
            handleMsgReceived();
        }
    }, [con])


    const handleSendMsg = (e) => {
        con.invoke("SendMessage", text.title, text.slug)
            .catch(err => {
                return console.error(err.toString());
            });
        e.preventDefault();
    }

    const handleText = (key, value) => {
        setText(prev => ({
            ...prev,
            [key]: value
        }))
    }

    // React.useEffect(() => {
    //     const script = document.getElementById('quill-script');
    //     console.log(script);
    //     if (script) {
    //         const Quill = window.Quill;
    //         console.log(Quill)
    //     }
    // })

    const initEditor = React.useCallback((ref) => {
        if (ref === null) { return }

        const Quill = window.Quill;
        if (Quill) {
            var quill = new Quill(ref, {
                theme: 'snow'
            });
        }
    })

    return (
        <Root>
            {addLinkTag('https://cdn.quilljs.com/1.3.6/quill.snow.css', 'quill-styles')}
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
                    <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
                        <Typography>Sockect {con ? 'Connected' : 'Disconnected'}</Typography>
                    </div>
                </div>

                <form className='blog-des-con'>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Title'
                                value={text.title}
                                onChange={(e) => handleText('title', e.target.value)}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Category' />
                        </Grid>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Slug'
                                value={text.slug}
                                onChange={(e) => handleText('slug', e.target.value)}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Status' />
                        </Grid>

                        <Grid item md={12}>
                            <div>
                                <div ref={initEditor} />
                            </div>
                        </Grid>
                    </Grid>
                </form>
                <div className='action-btn' style={{ marginTop: '14px', display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
                    <Button variant="outlined"
                        disabled={!con ? true : false}
                        onClick={handleSendMsg}
                    >
                        Submit
                    </Button>
                </div>


                {/* Received message here */}
                <div>
                    <ul id='received-message'>

                    </ul>
                </div>
            </StyledPaper>
            {addScriptTag('https://cdn.quilljs.com/1.3.6/quill.js', 'quill-script')}
            <script>
                window.Quill = Quill;
            </script>
        </Root>
    )
}

export default BlogPage