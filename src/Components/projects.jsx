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
          </div>
          <div>
              <img id='on-the-record-pic' src='./project-images/on-the-record.png' alt='On the Record UI'/>
          </div>
        </div> 
        {/* <div className='project left'>
            <h2>Student/Teacher Appointment Site</h2>
        </div>
        <div className='project right'>
            <h2>Database Superstore</h2>
        </div>
        <div className='project left'>
            <h2>Mondial Munch</h2>
        </div> */}
      </div>
    </>
  )
}