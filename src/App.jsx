import './App.css'
import Skills from './Components/Skills'
import Projects from './Components/projects'
function App() {
  return (
    <>
      <div id="top_container">
        <div id="top-text">
          <h1>Safin Haque</h1>
          <h3>Junior FullStack Developer</h3>
          <p>A Dawson Student with Interest in FullStack web Development and Database Management</p>
        </div>
        <img id='profile_image' src='/profile.png'></img>
      </div>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App
