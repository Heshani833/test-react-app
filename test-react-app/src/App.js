import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate(); //hook to navigate


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <button className='btn' onClick={() => navigate('/Users')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
