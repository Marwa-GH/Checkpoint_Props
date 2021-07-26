import Profile from './Profile/Profile';
import './App.css';

function App() {


  const name = "Marwa Ghazouani";
  const bio = "LAIAG"
  const profession = "etudiante"

  return (
    
    <div className="App" >
      <header className="App-header">
        
        <Profile fullName={name} bio={bio} profession={profession}/>
      
      
      
  </header>
    </div>
    
  );
}

export default App;