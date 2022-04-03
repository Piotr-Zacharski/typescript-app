import './App.css'
import React, {useState} from "react";
import MyToDoList from "./components/MyToDoList"
import NewTodo from "./components/NewTodo"
import { Todo } from './myTodo.model'
import { v4 as uuid4 } from 'uuid'



const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

    const addHandler = (text: string) => {
      setTodos(prevTodos => [...prevTodos, {id: uuid4().toString(), text: text}]);
    };

    const handleDelete = (todoId: string) => {
      setTodos(prevTodos => {
          return prevTodos.filter(todo => todo.id !== todoId)
      })
    };

  return (
    <div className="App">
        <NewTodo onAddItem={addHandler}/>
        <MyToDoList items={todos} deleteTodo={handleDelete}/>
    </div>
  );
}

export default App;
