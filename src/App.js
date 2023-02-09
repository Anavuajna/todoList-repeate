import './App.css';
import imageOne from './1.jpg';
import imageTwo from "./2.jpg";
import { TodoList } from './TodoList';


function App() {
  return (
    <div className="App">
      <img src={imageOne} alt="kids" width="300px"/>
      <h1>Мои дела на сегодня:</h1>
      <TodoList />
      <img src={imageTwo} alt="kids" width="300px"/>
    </div>
  );
}

export default App;
