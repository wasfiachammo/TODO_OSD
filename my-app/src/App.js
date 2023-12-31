import Login from './Components/Login'
import './App.css';
import Todo from './Components/Todo';
import Profile from './Components/Profile';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login></Login>}>
        </Route>
        <Route path="todo" element={<Todo></Todo>}></Route>

        <Route path="profile" element={<Profile></Profile>}></Route>

      </Routes>
      
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
