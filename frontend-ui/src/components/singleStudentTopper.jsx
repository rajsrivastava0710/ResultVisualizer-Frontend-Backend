const SingleStudentTopper = ({studentData, bgColor}) => {
   
    const topperDetailContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style = {topperDetailContainer}>
            <div>{studentData.name}</div>
            <div>{studentData.rollNumber}</div>
            <div>{studentData.branch}</div>
            <div>{studentData.percentage}</div>
            <div>{studentData.division}</div>
        </div>
    );

  };

  export default SingleStudentTopper