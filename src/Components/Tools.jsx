import './Tools.css'
import '../App.css'

export default function Tools(){
  return (
    <>
      <div id='tools-container'>
        <h2>Tools & Tech</h2>
        <div id='tools-list'>
            <div>
              <img src='./icons/icons8-git-50.png'></img>
              <p>Git</p>
            </div>
            <div>
              <img id='small-img' src='./icons/icons8-node-js-64.png'></img>
              <p>Node.js</p>
            </div>
            <div>
              <img src='./icons/icons8-docker-50.png'></img>
              <p>Docker</p>
            </div>
            <div>
              <img id='small-img' src='./icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-48.png'></img>
              <p>MongoDB</p>
            </div>
        </div>
      </div>
    </>
  )
}