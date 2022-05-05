import React from 'react';
import styled from '@mui/material/styles/styled';
import { DashboardBread, StyledPaper } from '../components/Dashboard';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Editor from '../components/Editor';
import BlogService from '../services/blog/BlogService';
// import * as signalR from '@microsoft/signalr';

// context
import blogContext from '../contexts/blogContext';

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
    // const [con, setCon] = React.useState(null);

    const { connection } = React.useContext(blogContext);
    const [text, setText] = React.useState({
        title: '',
        slug: '',
        category: '',
        status: ''
    });


    const handleMsgReceived = React.useCallback(() => {
        connection.on("ReceiveMessage", (user, message) => {
            let li = document.createElement('li');
            document.getElementById('received-message').appendChild(li);
            li.textContent = `Blog: ${user} with slug: ${message}`;
        })
    });


    // get or receive the data from signal r
    React.useEffect(() => {

        if (connection) {
            handleMsgReceived();
        }
    }, [connection])

    const handleText = (key, value) => {
        setText(prev => ({
            ...prev,
            [key]: value
        }))

    }


    // save change the blog
    const handleBlogSubmit = (e) => {
        e.preventDefault();
        const blogSV = new BlogService();
        blogSV.addBlog({
            title: text.title,
            category: text.category,
            slug: text.slug,
            status: text.status
        }).then(res => {
            // if data save successfully
            // invoke the socket server
            if (res.status === 200) {
                connection.invoke("SendMessage", text.title, text.slug)
                    .catch(err => {
                        return console.error(err.toString());
                    });
            }
        });
    }

    return (
        <Root>
            {/* {addLinkTag('https://cdn.quilljs.com/1.3.6/quill.snow.css', 'quill-styles')} */}
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
                        <Typography>Sockect {connection ? 'Connected' : 'Disconnected'}</Typography>
                    </div>
                </div>

                <form className='blog-des-con' onSubmit={handleBlogSubmit}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Title'
                                value={text.title}
                                onChange={(e) => handleText('title', e.target.value)}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Category'
                                value={text.category}
                                onChange={(e) => handleText('category', e.target.value)}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Slug'
                                value={text.slug}
                                onChange={(e) => handleText('slug', e.target.value)}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField size='small' fullWidth label='Status'
                                value={text.status}
                                onChange={(e) => handleText('status', e.target.value)}
                            />
                        </Grid>

                        <Grid item md={12}>
                            {/* <div ref={initEditor} /> */}
                            <div>
                                <Editor id='blog' onChange={(delta) => console.log(delta)}
                                    value={{
                                        ops: [
                                            { insert: 'Type', attributes: { bold: true } },
                                            { insert: ' the text ' },
                                            { insert: 'Here', attributes: { color: '#cccccc' } }
                                        ]
                                    }}
                                />
                            </div>

                        </Grid>
                    </Grid>
                    <div className='action-btn' style={{ marginTop: '14px', display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
                        <Button variant="outlined"
                            disabled={!connection ? true : false}
                            // onClick={handleSendMsg}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </div>
                </form>

            </StyledPaper>
            {/* {addScriptTag('https://cdn.quilljs.com/1.3.6/quill.js', 'quill-script')} */}
            <script>
                window.Quill = Quill;
            </script>
        </Root>
    )
}

export default BlogPage