import SingleStudentTopper from "./singleStudentTopper";

const TopperPanel = () => {
   
    const studentData = 
    [
        {
            'name': 'Raj',
            'rollNumber': '16243',
            'percentage':'76',
            'division':'I-Div',
            'branch':'CSE'
        },
        {
            'name': 'Shiv',
            'rollNumber': '16243',
            'percentage':'76',
            'division':'I-Div',
            'branch':'CSE'
        },
        {
            'name': 'Satya',
            'rollNumber': '16243',
            'percentage':'76',
            'division':'I-Div',
            'branch':'CSE'
        }
    ];

    const parentDiv = {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        margin: 'auto',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        margin: '15px auto',
    }
    const singleStudent = {
        width: '200px',
        height: '200px',
        border: '2px solid black',
        borderRadius: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    }
    const studentBlock = {
        minWidth:'200px',
        width:'30%',
        height:'258px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems: 'center'
    }
    const crownStyle = {
        transform: 'scale(5)'
    }
    
    return (
        <div style = {parentDiv}>
            <div style={studentBlock}>
                <div style = {singleStudent} className = 'secondTopperColor'>
                    {
                    <SingleStudentTopper studentData={studentData[1]}></SingleStudentTopper>   
                    }
                </div>
            </div>
                    
            <div style={studentBlock}>
                <div style = {crownStyle} >
                    &#128081;
                </div>
                <div style = {singleStudent} className = 'topperColor' >
                {
                <SingleStudentTopper studentData={studentData[0]}></SingleStudentTopper>
                }
                </div>
            </div>
        
            <div style={studentBlock}>
                <div style={singleStudent} className = 'thirdTopperColor'>
                    {
                    <SingleStudentTopper studentData={studentData[2]}></SingleStudentTopper>
                    }
                </div>
            </div>
        
      </div>
    );
  };

  export default TopperPanel