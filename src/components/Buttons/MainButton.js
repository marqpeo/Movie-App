import {Button, styled} from '@mui/material';

const StyledMainButton =  styled(Button)(() => ({
    textAlign: 'center',
    backgroundColor: '#DF1313',
    borderWidth: '2px',
    borderRadius: '10px',
    borderStyle: 'solid',
    borderColor:'transparent',
    '&:hover':{
        backgroundColor: 'transparent',
        borderColor:'#DF1313'
    }
}))
const MainButton = (props) => {

    return(
        <StyledMainButton
            color='error'
            variant="contained"
            {...props}
            >{props.children}</StyledMainButton>
    )
}

export default MainButton