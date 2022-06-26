import './App.css';
import PersonList from './PersonList';
import PersonAdd from './PersonAdd';
import PersonRemove from './PersonRemove';


function App() {
  return (
    <div className="App">
      <PersonList/>
      <PersonAdd/>
      <PersonRemove/>
    </div>
    
  )
}

export default App;
