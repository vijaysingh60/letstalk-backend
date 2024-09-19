
import './App.css';
import ChatBot from './components/ChatBot';
import {Route,Routes,Link} from 'react-router-dom'
import Chat from './components/Chat';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
            
        </Routes>
    
    </div>
  );
}

export default App;
