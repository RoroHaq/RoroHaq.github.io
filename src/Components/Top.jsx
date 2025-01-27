import '../App.css'
import './Top.css'

export default function Top(){
  return (
    <>
      <div id="top_container">
        <div id="top-text">
          <h1>Safin Haque</h1>
          <h3>Junior FullStack Developer</h3>
          <p>A Dawson Student with Interest in FullStack web Development and Database Management</p>
        </div>
        <figure>
          <img id='profile_image' src='/profile.png'></img>
          <figcaption>
            <a href='https://www.linkedin.com/in/safin-haque-7824792aa/' target="_blank">
              <img id='linkedin-image' src='./icons/icons8-linkedin-50.png'></img>
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  )
}