import { useState} from 'react';
import Placeholder from './components/Placeholder';
import Greeting from './components/Greeting';
import Button from './components/Button';
import './App.css';

function App() {

   // const [state, setState] = useState(initialState)
  const [count, setCount] = useState(0)
  const [skill, setSkill] = useState("")

  const skillsArr = ['HTML5', 'CSS', 'JavaScript', 'React JS', 'Node.js', 'Python', 'MySQL', 'MongoDB', 'REST API']; 
  

  const handleCount = () => {
    setCount(count + 1) 
  
    if(count < skillsArr.length ) {
      // let skill = skillsArr[count]
      setSkill(skillsArr[count]) 
    } else if(count === skillsArr.length) {
        setSkill("That's all for now!");  
    } else{
      setSkill("Goodbye!")
    }
  }
    
   
  return (
    <>
      <body>
        <div className="card">
          <section className ="card-body">
            <Greeting />
            
            <Placeholder  message={skill} />
            
            <Button clickHandler= {handleCount} btntext={"Skills"} />
          </section>
        </div>
      </body>
    </>
  );
}

export default App;
