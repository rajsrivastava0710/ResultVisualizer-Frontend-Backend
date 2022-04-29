import SingleStudentTopper from "./singleStudentTopper";

const TopperPanel = () => {
   
    const studentData = 
    [
        {
            'name': 'Raj Srivastava',
            'rollNumber': '16243',
            'percentage':'76',
            'division':'I-Div',
            'branch':'CSE'
        },
        {
            'name': 'Tejaswi Verma',
            'rollNumber': '16243',
            'percentage':'76',
            'division':'I-Div',
            'branch':'CSE'
        },
        {
            'name': 'Singh Shubham Singh Sanjay Singh',
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
        alignItems: 'center',
    }
    const crownStyle = {
        transform: 'scale(5)',
        position: 'relative',
        top: '-33px'
    }
    const topperText = {
        color: 'rgb(53 56 228)', 
        textAlign: 'center', 
        fontFamily: 'monospace', 
        fontSize: '2rem', 
        fontWeight: '600'
    }
    
    return (
        <div className = "topperLayoutBox">
            <div style= {topperText}>TOPPERS (Put this also under Accordion)</div>
            <hr style={{border: '2px solid black'}}></hr>
            <div style = {parentDiv}>
                <div className="studentBlock">
                    <div style = {singleStudent} className = 'secondTopperColor toppers'>
                        {
                        <SingleStudentTopper studentData={studentData[1]} color = {'#d0cecef0'}></SingleStudentTopper>   
                        }
                    </div>
                </div>
                        
                <div className = 'studentBlock firstTopperPosition'>
                    <div style = {crownStyle} >
                        &#128081;
                    </div>
                    <div style = {singleStudent} className = 'topperColor toppers' >
                    {
                    <SingleStudentTopper studentData={studentData[0]} color = {'#ecd6ab'}></SingleStudentTopper>
                    }
                    </div>
                </div>
            
                <div className = 'studentBlock relativePosition'>
                    <div style={singleStudent} className = 'thirdTopperColor toppers'>
                        {
                        <SingleStudentTopper studentData={studentData[2]} color = {'#4d3535'}></SingleStudentTopper>
                        }
                    </div>
                </div>
            
        </div>
        </div>
    );
  };

  export default TopperPanel