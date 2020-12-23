import './App.css';
import CounterContext from './CounterContext';
import Parent from './Parent';



function App() {
  return (
    
   <CounterContext.Provider value={10}>
    <div >
      
      <Parent />

    </div>
    </CounterContext.Provider>
  
  );
}

export default App;
