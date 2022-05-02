import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const SpinnerLoader = ({message}) => {

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <CircularProgress />
                <div style = {{
                margin: '18px',
                fontSize: '1.4rem',
                color: 'darkblue',
                fontWeight: '600',
                fontFamily: 'monospace'
                }}>{message}</div>
            </Box>
        </div>
    )
}

export default SpinnerLoader