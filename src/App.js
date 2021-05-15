import { useState, useEffect } from 'react';
import Placeholder from './components/Placeholder';
import Button from './components/Button';
import './App.css';

function App() {

   // const [state, setState] = useState(initialState)
  const [count, setCount] = useState(0)
  const [skill, setSkill] = useState("")

  const skillsArr = ['HTML5', 'CSS', 'JavaScript', 'React JS', 'Node.js', 'Python', 'MySQL', 'MongoDB', 'REST API']; 
  

  const handleCount = () => {
    setCount(count + 1) 
  
    if( count - 1 < skillsArr.length ) {
        let skill = skillsArr[count]
        setSkill(skillsArr[count]) 
    } 
  }

   
  return (
    <>
      <body>
        <div className="card">
          <section className ="card-body">
            <h2 id="list" classNamee="placeholder">
            <Placeholder  message={skill} />
              {/* This is a placeholder */}
            </h2>
            <div className="btn">
              <Button clickHandler= {handleCount} btntext={"Skills"} />
              {/* <button id="btns">Skills</button> */}
            </div>
          </section>
        </div>
      </body>
    </>
  );
}

export default App;
