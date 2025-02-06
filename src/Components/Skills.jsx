import './skills.css'
import '../App.css'

export default function Skills(){

  return (
    <>
      <div id="skills-container">
        <div id="programming-skills-container">
          <h2>Programming Languages</h2>
          <div id="programming-skills">
              <div>
                <img src="/icons/icons8-java-50.png" alt="Java Icon"></img>
                <p>Java</p>
              </div>
              <div>
                <img src="/icons/icons8-c-sharp-logo-50.png" alt="C# Icon"></img>
                <p>C#</p>
              </div>
              <div>
                <img src="/icons/icons8-kotlin-50.png" alt="Kotlin Icon"></img>
                <p>Kotlin</p>
              </div>
              <div>
                <img id='sql-image'src="/icons/icons8-sql-80.png" alt="SQL Icon"></img>
                <p>SQL</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}