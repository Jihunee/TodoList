import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import DoneTodo from "./components/DoneTodo";

function App() {
  const [toDo, setTodo] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트를 공부해봅시다.",
    },
    {
      id: 2,
      title: "자바 스크립트 공부하기",
      content: "자바스크립트를 공부해봅시다.",
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState([]);

  let titleHanler = (event) => {
    setTitle(event.target.value);
  };

  let contentHanler = (event) => {
    setContent(event.target.value);
  };

  // 추가 기능
  const addTodo = () => {
    if (title === "") {
      alert("제목을 입력해주세요");
      return false;
    } else if (content === "") {
      alert("내용을 입력해주세요");
      return false;
    }
    const newTodo = {
      id: toDo.length + 1,
      title,
      content,
    };

    setTodo([...toDo, newTodo]);
    setTitle("");
    setContent("");
  };

  // 삭제 기능
  const clickDeleteHaneler = (id) => {
    const newTodo = toDo.filter((toDos) => toDos.id !== id);
    setTodo(newTodo);
  };

  // 완료 삭제 기능
  const deleteDoneTodoHandler = (id) => {
    setDone(done.filter((dt) => dt.id !== id));
  };

  // 완료 취소 기능
  const doneCancelHandler = (t) => {
    const newTodo = {
      id: t.id,
      title: t.title,
      content: t.content,
    };
    setTodo([...toDo, newTodo]);
    setDone(done.filter((dt) => t.id !== dt.id));
  };

  // 완료 기능
  const checkedHandler = (dt) => {
    const newDoneTodo = {
      id: dt.id,
      title: dt.title,
      content: dt.content,
    };
    setDone([...done, newDoneTodo]);
    setTodo(toDo.filter((t) => t.id !== dt.id));
  };
  return (
    <div>
      <header className="warpper">
        <h1>Todo List</h1>
        <div className="main">
          <div className="inputBox">
            제목 :{" "}
            <input
              type="text"
              value={title}
              onChange={titleHanler}
              placeholder="제목을 입력해주세요"
            />
            내용 :{" "}
            <input
              type="text"
              value={content}
              onChange={contentHanler}
              placeholder="내용을 입력해주세요"
            />
          </div>
          <div>
            <button className="btn" onClick={addTodo}>
              추가!
            </button>
          </div>
        </div>
      </header>
      <div className="toDolist">
        <div className="workingtitle">
          <h1>해야 할 일!</h1>
        </div>
        <section className="working">
          {toDo.map(function (item) {
            return (
              <Todo
                key={item.id}
                item={item}
                clickDeleteHaneler={clickDeleteHaneler}
                checkedHandler={checkedHandler}
              />
            );
          })}
        </section>
        <div className="donetitle">
          <h1>완료 한 일!</h1>
        </div>
        <section className="done">
          {done.map(function (done) {
            return (
              <DoneTodo
                done={done}
                deleteDoneTodoHandler={deleteDoneTodoHandler}
                doneCancelHandler={doneCancelHandler}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
