import createTheme from '@mui/material/styles/createTheme';

const defaultTheme = createTheme({
    shape: {
        borderRadius: 8
    },
    palette: {
        background: {
            default: '#F8F8F8'
        }
    },
    typography: {
        fontFamily: ['Montserrat', 'Roboto'].join(',')
    }
});
export default defaultTheme;