import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import { Input } from "./components/Input";
import Todo from "./components/Todo";

function App() {
  const [toDo, setTodo] = useState([
    {
      id: uuid(),
      title: "리액트 공부하기",
      content: "리액트를 공부해봅시다.",
      isDone: false,
    },
    {
      id: uuid(),
      title: "리액트 숙련",
      content: "리액트 숙련 강의 듣기.",
      isDone: false,
    },
  ]);

  // 추가 기능
  const addTodo = () => {};

  return (
    <div>
      <header className="warpper">
        <h1>Todo List</h1>
        <div className="main">
          <Input toDo={toDo} setTodo={setTodo} addTodo={addTodo} />
        </div>
      </header>
      <div className="toDolist">
        <div className="workingtitle">
          <h1>해야 할 일!</h1>
        </div>
        <Todo toDo={toDo} setTodo={setTodo} listIsDone={false} />
        <div className="donetitle">
          <h1>완료 한 일!</h1>
        </div>
        <section className="done">
          <Todo toDo={toDo} setTodo={setTodo} listIsDone={true} />
        </section>
      </div>
    </div>
  );
}

export default App;
