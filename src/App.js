import './App.css';
import NavBar from './Components/NavBar';
import { Route , Routes} from 'react-router-dom'
import Albums from './Components/Albums/Albums'
import Todos from './Components/Todos/Todos'
import Comments from './Components/Comments/Comments';
function App() {
  return (
    <>
      <NavBar />
      <div>  
      <Routes>
        <Route path='/albums' element={<Albums />}/>
        <Route path='/comments' element={<Comments />}/>
        <Route path="/todos"  element={<Todos />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
