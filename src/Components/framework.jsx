import './framework.css'
import '../App.css'

export default function Framework(){
  return (
    <>
    <div id='framework-container'>
      <h1>Frameworks & Libraries</h1>
      <div id='frameworks-list'>
        <div>
          <img src='./icons/icons8-react-64.png'></img>
          <p>React</p>
        </div>
        <div>
          <img src='./icons/icons8-express-js-50.png'></img>
          <p>Express.js</p>
        </div>
        <div>
          <img src='./icons/icons8-flask-50.png'></img>
          <p>Flask</p>
        </div>
        <div>
          <img id='large-logo' src='./icons/avalonia.png'></img>
          <p>Avalonia</p>
        </div>
        <div>
          <img id='large-logo' src='./icons/jetpack-compose.png'></img>
          <p>Jetpack Compose</p>
        </div>
      </div>   
    </div>
    </>
  )
}