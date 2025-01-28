import './projects.css';
import '../App.css'
import 'animate.css';
export default function Projects(){

  return (
    <>
      <div className='projects'>
        <h1>Projects</h1>
        <div className='project right'>
          <div id='description'>
            <h2>On The Record</h2>
            <hr></hr>
            <ul>
              <li>A MERN Web App where we visualize the relationship between Spotify Streams and BillBoard Top 100.</li>
              <li>Work on the Backend, handling the express API, dataset filtering, and Unit Testing</li>
              <li>Implement Gitlab's CI/CD for deployment</li>
              <li>Hosted on an AWS Server</li>
            </ul>
            <div id='tools-used-1'>
                <div>MongoDB</div>
                <div>Express.js</div>
                <div>React.js</div>
                <div>Node.js</div>
                <div>Mocha/Chai</div>
            </div>
            <div id='project-links'>
              <a href='https://five20-project-safin-nathan-minh.onrender.com' target='_blank'>
              <div>
                Site Link
              </div>
              </a>
            </div>
          </div>
          <div>
              <img id='project-image' src='./project-images/on-the-record.png' alt='On the Record UI'/>
          </div>
        </div> 

        <div className='project left'>
        <div id='description'>
            <h2>Student/Teacher Appointments</h2>
            <hr></hr>
            <ul>
              <li>A fullstack website using Flask/SQL for student/teacher appointment</li>
              <li>Learned to Implement the MVC design patterns on our project and how to use docker to run it inside of a container</li>
              <li>Implement basic CRUD operations for middlewear in python for the backend process.</li>
            </ul>
            <div id='tools-used-1'>
                <div>Flask</div>
                <div>SQL</div>
                <div>Docker</div>
                <div>HTML/CSS</div>
            </div>
            <div id='project-links'>
              <a href='https://gitlab.com/RashedKamal/dw-420w24sec2-prj-grp4-kamal' target='_blank'>
                <div>
                  Repo
                </div>
              </a>
            </div>
          </div>
          <div>
              <img id='project-image' src='./project-images/student-teacher-appointment.png' alt='On the Record UI'/>
          </div>
        </div>
        <div className='project right no-img'>
        <div id='description'>
            <h2>Database SuperStore</h2>
            <hr></hr>
            <ul>
              <li>A Java Console Application using JDBC/SQL in which you traverse a superstore as either a client or admin.</li>
              <li>Contribute on Normalizing our Table, create packages for our procedures using PL/SQL, 
                as well as making middlewear functions using JDBC.</li>
              <li>Implement Front-End Console Application for the Client side, connecting the middlewear.</li>
            </ul>
            <div id='tools-used-1'>
                <div>Java</div>
                <div>SQL & PL/SQL</div>
                <div>JDBC</div>
            </div>
            <div id='project-links'>
              <a href='https://gitlab.com/PrabhjotAulakh12345/database2-project' target='_blank'>
                <div>
                  Repo
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='project left no-img'>
        <div id='description'>
            <h2>Mondial Munch</h2>
            <hr></hr>
            <ul>
              <li>A C# Application with Avalonia UI which is a recipe app that uses a globe to track recipes you made from the origin.</li>
              <li>Collaborate in a team of 3 implementing required classes, Avalonia, DB & Unit Testing by using Moq</li>
              <li>Contribute making the basic Avalonia UI and functionality to interact with our DB to write reviews, give ratings and create new recipes</li>
            </ul>
            <div id='tools-used-1'>
                <div>C#</div>
                <div>Avalonia</div>
                <div>SQLite</div>
            </div>
            <div id='project-links'>
              <a href='https://gitlab.com/SafinHQ13/mondial-munch' target='_blank'>
                <div>
                  Repo
                </div>
              </a>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}