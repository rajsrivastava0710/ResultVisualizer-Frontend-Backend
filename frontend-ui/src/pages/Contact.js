import PageTitle from "../components/PageTitle"
import SingleContactContainer from "../components/singleContact"
import Image1 from "../images/raj.jpg"
import Image2 from "../images/tejaswi.jpg"

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

const ContactPage = () => {
    return (
      <div className='contact-page-container'>
        <PageTitle title = {"Contact Us"}></PageTitle>
        <div className='all-contact-container'>
          <SingleContactContainer data = {rajData} /> 
          <SingleContactContainer data = {tvData} />
        </div>
        </div>
    );
  };
  
  export default ContactPage;