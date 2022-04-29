const SingleStudentTopper = ({studentData, color}) => {
   
    const topperDetailContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'space-evenly',
        color: color,
        fontFamily: 'cursive',
        fontWeight: '600',
        padding: '5px'
    }
    return (
        <div style = {topperDetailContainer}>
            <div style = {{width: '70%', textAlign: 'center', padding: '10px'}}>{studentData.name}</div>
            <div>({studentData.rollNumber})</div>
            <hr style = {{width: '95%', border: '1px solid #cccccc78'}}></hr>
            <div>{studentData.branch}</div>
            <div>{studentData.percent}%</div>
            <div>{studentData.division}</div>
        </div>
    );

  };

  export default SingleStudentTopper