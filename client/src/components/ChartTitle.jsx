const ChartTitle = ({title}) => {

    const titleStyle = {
        fontSize: '1.67rem',
        padding: '10px',
        textAlign: 'center',
        justifyContent: 'center',
        background: '#e4e8c7',
        fontFamily: 'serif'
    }

    return (
        <div style = {titleStyle}>{title}</div>
    )
}

export default ChartTitle