// import './App.css';
import Navbar from './components/Navbar';
import { Textarea } from './components/Textarea';
import Counter from './components/Counter'

function App() {
  return (
    
    <div>
      <Navbar title = "Varshaa" firstMenu = "About Me" secondMenu = {45}/>
      <Textarea text="Enter a value"/>
      <Counter/>
    </div>
  );
}

export default App;
