const SingleContactContainer = ({data}) => {

    return (
        <div className='nameandpic_holder'>
          <div className='contact-container'>
            
            <div className='developer-pic' style = {data.image}></div>
            <div className='developer-detail'>
              <span>{data.name}</span>
              <span>{data.email}</span>
              <span>{data.designation}</span>
              <span>{data.role}</span>
            </div>
            
          </div>

          <div className="short-name">{data.name.split(' ')[0]}</div>
          
        </div>
    );

  };

  export default SingleContactContainer