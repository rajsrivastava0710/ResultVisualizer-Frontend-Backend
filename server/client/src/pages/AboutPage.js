import PageTitle from "../components/PageTitle";

const AboutPage = () => {
  return (
    <div
      style={{ display: "flex", padding: "15px", flexDirection: "column" }}
      className="about-page"
    >
      <PageTitle title={"About Page"}></PageTitle>
      <div>
        <p>
          KNIT Result Visualizer is a web application meant for KNIT students to
          visualize their academic performance.
        </p>
        <p>
          We have scraped the data from KNIT result website for all the
          students.
          <br />
          <a href="https://govexams.com/knit/searchresult.aspx">
            https://govexams.com/knit/searchresult.aspx
          </a>
        </p>
        <p style={{fontFamily: 'revert',fontWeight: '600',textDecoration: 'underline', marginBottom: '10px'}}>Current Features :</p>
        <ul style = {{marginTop: '0px'}}>
          <li>
            Visualize all the students data of a particular branch in tabular
            format.
          </li>
          <li>
            Graphical visualization for student's data for a particular branch.
          </li>
          <li>
            A seperate profile page for each student with their academic
            information, involving several visualizations.
          </li>
          <li>
            Enabling a student to view his/her marks year wise as well as
            subject wise.
          </li>
          <li>Shows the overall toppers as well as branch toppers.</li>
        </ul>
        <p style={{fontFamily: 'revert',fontWeight: '600',textDecoration: 'underline', marginBottom: '10px'}}>Future Endeavours :</p>
        <ul style = {{marginTop: '0px'}}>
          <li>Compare 2 student's data side by side.</li>
          <li>
            Generating a file with list of students as per the given filter.
          </li>
          <li>
            Generating a skill score of a student based on their coding
            profiles.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
