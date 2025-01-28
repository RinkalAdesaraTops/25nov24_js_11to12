import logo from './logo.svg';
import './App.css';
import './Custom.css'
import Mycomponent from './Mycomponent';
import StateExample from './StateExample';
import BootstrapExample from './BootstrapExample';
import Header from './Header';
import Section from './Section';
import Lifecycleclass from './Lifecycleclass';
import Lifecyclefunc from './Lifecyclefunc';

function App() {
 let name="abcdefg"
 let age=24
 let arr = [10,20,33,44,30,40,50]
  return (
    <div>
      <h3>First Project</h3>
      {/* <Mycomponent myname={name} myage={age} arr={arr}/> */}
      {/* <StateExample /> */}
      {/* <BootstrapExample /> */}
      {/* <Header />
      <Section /> */}
      {/* <Lifecycleclass arr="array data"/> */}
      <Lifecyclefunc />
    </div>
  );
}
export default App;
