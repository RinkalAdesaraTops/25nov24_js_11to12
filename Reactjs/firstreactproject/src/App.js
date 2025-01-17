import logo from './logo.svg';
import './App.css';
import './Custom.css'
import Mycomponent from './Mycomponent';
import StateExample from './StateExample';

function App() {
 let name="abcdefg"
 let age=24
 let arr = [10,20,33,44,30,40,50]
  return (
    <div>
      <h3>First Project</h3>
      {/* <Mycomponent myname={name} myage={age} arr={arr}/> */}
      <StateExample />
    </div>
  );
}
export default App;
