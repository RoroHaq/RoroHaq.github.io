import '../App.css'
import './Top.css'

export default function Top(){
  return (
    <>
      <div id="top_container">
        <div id="top-text">
          <h1><b>Safin Haque</b></h1>
          <h3>Junior FullStack Developer</h3>
          <p>Current 3rd Year Dawson Computer Science Student.</p>
          <p>Can speak English, French and Bangla. Have an Interest in FullStack Web Development and Database Management. 
            Hoping to learn more in my career and working with others.</p>
          <a href='https://www.linkedin.com/in/safin-haque-7824792aa/' target="_blank">
            <img id='linkedin-image' src='./icons/icons8-linkedin-50.png'></img>
          </a>
          <a href='https://gitlab.com/SafinHQ13' target='_blank'>
            <img id="gitlab-logo"src='./icons/gitlab-logo-700.png'/>
          </a>    
        </div>
        <div>
          <img id='profile_image' src='/profile.png'></img>
        </div>
        
      </div>
    </>
  )
}