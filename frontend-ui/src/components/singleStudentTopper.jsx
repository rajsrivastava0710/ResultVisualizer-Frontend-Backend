import { useNavigate } from "react-router-dom";

const SingleStudentTopper = ({studentData, color}) => {
    const navigate = useNavigate();
    const topperDetailContainer = {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        // justifyContent: 'space-evenly',
        color: color,
        fontFamily: 'cursive',
        fontWeight: '600',
        padding: '5px'
    }
    const handleClick = (studentsData) => {
        navigate(`/students/${studentsData.rollNumber}`, { state: studentsData });
      };
      
    return (
        <div style = {topperDetailContainer} onClick={()=>{handleClick(studentData)}}>
            <div>
                <div style = {{width: '68%', margin: 'auto', padding: '3px'}}>{studentData.name}</div>
                <div>({studentData.rollNumber})</div>
            </div>
            <div style = {{borderTop: '2px solid #4a3b35',width: '91%',marginTop: '10px',paddingTop: '5px'}}>
                <div>{studentData.branch}</div>
                <div>{studentData.percent}%</div>
                <div>{studentData.division}</div>
            </div>
        </div>
    );

  };

  export default SingleStudentTopper