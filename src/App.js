import './App.css';
import image from './todo.avif';
import imageTwo from './man.avif';
import { Todolist } from './Todolist';

function App() {
  return (
    <div className="App">
        <div className='container'>
          <img src={image} width="200px" alt="work" />
        </div>
        <div className='container'>
          <h1>To Do List</h1>
        </div>
        <Todolist />
        <div className='container'>
          <img src={imageTwo} width="200px" alt="man" />
      </div>
    </div>
  );
}

export default App;
