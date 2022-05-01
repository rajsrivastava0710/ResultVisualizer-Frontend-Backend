const PageTitle = ({title}) => {

    const titleStyle = {
        fontFamily: 'sans-serif',
        fontSize: '35px',
        padding: '5px',
        color: '#365284',
        textShadow: '2px -4px 8px #69819f',
        borderBottom: '3px solid #365284',
        marginBottom: '20px',
        alignSelf: 'center',
        // margin: 'auto'
    }

    return (
        <div style = {titleStyle}>{title}</div>
    )
}

export default PageTitle