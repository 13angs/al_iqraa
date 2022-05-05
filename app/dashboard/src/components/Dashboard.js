import styled from '@mui/material/styles/styled';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Paper from '@mui/material/Paper';

const drawerWidth = 240;
const StyledAppbar = styled(AppBar)(({ theme }) => ({
    [`&.MuiAppBar-root`]: {
        position: 'fixed',
        width: `calc(100% - ${drawerWidth + 14 * 2}px)`,
        margin: `14px 14px 14px ${drawerWidth + 14}px`,
        borderRadius: `${theme.shape.borderRadius}px`
        // marginLeft: `${drawerWidth + 100}px`,
    }
}))

const StyledBread = styled('div')(({ theme }) => ({



    [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
        margin: '14px 0px',
        '& .page-title': {
            fontSize: '25px',
            color: theme.palette.text.secondary,
            borderRight: `1px solid #D6DCE1`,
            paddingRight: '12px',
            fontWeight: theme.typography.fontWeightBold
        },

        '& .page-text': {
            color: theme.palette.primary.main
        }
    }
}))

export const StyledPaper = styled(Paper)(({ theme }) => ({
    maxWidth: '100%',
    padding: '14px',
    marginBottom: theme.shape.borderRadius
    // overflowX: 'hidden',
}))

export function DashboardAppbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <StyledAppbar

        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Responsive drawer
                </Typography>
            </Toolbar>
        </StyledAppbar>
    )
}


export function DashboardBread({ title, icon, menu1, menu2, action }) {
    return (
        <StyledBread>
            <Typography
                variant="h1" className="page-title"
                component='div'>
                {title}
            </Typography>
            <Breadcrumbs sx={{ marginLeft: '12px' }} separator="›">
                <Typography className="page-text">
                    Pages
                </Typography>
                <Typography className="page-text">{menu1}</Typography>
                <Typography>{menu2}</Typography>
            </Breadcrumbs>
        </StyledBread>
    )
}

export function DashboardContent({ children }) {
    return (
        <Box
            component="main"
            sx={{
                [`&.MuiBox-root`]: theme => ({
                    flexGrow: 1,
                    padding: '28px 14px 0px 14px',
                    maxWidth: { sm: `calc(100 % - ${drawerWidth}px)` },
                    overflowX: 'hidden'
                })
            }}
        >
            <Toolbar />
            {children}
        </Box>
    )
}

export function DashboardDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

DashboardDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};





// the dashboard container
const Dashboard = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {

    }
}))

export default Dashboard;