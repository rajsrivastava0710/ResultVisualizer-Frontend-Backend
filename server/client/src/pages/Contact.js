import PageTitle from "../components/PageTitle"
import SingleContactContainer from "../components/singleContact"
import Image1 from "../images/raj.jpg"
import Image2 from "../images/tejaswi.jpg"
import styled from "styled-components";
import {
  GitHub
} from "@mui/icons-material";

const backgroundImg = {
  background: `url(${Image1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}
const backgroundImg2 = {
  background: `url(${Image2})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const rajData = {
  name: 'Raj Srivastava',
  email: 'rajsriv.14@gmail.com',
  designation: 'System Engineer at TCS',
  role: 'Full Stack Developer',
  image: backgroundImg
}

const tvData = {
  name: 'Tejaswi Verma',
  email: 'tejaswi.verma.19@gmail.com',
  designation: 'Software Engineer at Optum',
  role: 'Full Stack Developer',
  image: backgroundImg2
}

const buttonStyle = {
    padding: '6px',
    border: '2px solid black',
    borderRadius: '12px',
    background: '#7397bb',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 11px 2px cornflowerblue'
}

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #161b22; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

const Span = styled.span`
  margin-top: 10px;
`;

const Container = styled.div`
  padding: 40px;
`;

const ContactPage = () => {
    return (
      <div className='contact-page-container'>
        <PageTitle title = {"Contact Us"}></PageTitle>
        <div className='all-contact-container'>
          <SingleContactContainer data = {rajData} /> 
          <SingleContactContainer data = {tvData} />
        </div>
        <div style = {{margin: 'auto'}}>
            <button style = {buttonStyle}>
              <a href = "https://github.com/rajsrivastava0710/ResultVisualizer-Frontend-Backend" style={{fontSize: '25px', color: 'white'}}>Project Repo</a>
              <SocialIcon color="E4405F">
                  <GitHub />
              </SocialIcon>
            </button>
          </div>
        </div>
    );
  };
  
  export default ContactPage;