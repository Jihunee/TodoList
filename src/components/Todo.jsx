import React from "react";

function Todo({ toDo, setTodo, listIsDone }) {
  return (
    <>
      <section className="working">
        {toDo
          .filter((todo) => todo.isDone === listIsDone)
          .map(function (item) {
            return (
              <div key={item.id} className="list">
                <h1>{item.title}</h1>
                {item.content}
                <div className="btnBox">
                  <button
                    className="sucessbtn"
                    onClick={() => {
                      const newTodos = toDo.map((todo) => {
                        if (todo.id === item.id) {
                          return {
                            ...todo,
                            isDone: !todo.isDone,
                          };
                        } else {
                          return todo;
                        }
                      });
                      setTodo(newTodos);
                    }}
                  >
                    {listIsDone ? "취소하기" : "완료하기"}
                  </button>
                  <button
                    className="deletebtn"
                    onClick={() => {
                      const newTodo = toDo.filter(
                        (todos) => todos.id !== item.id
                      );
                      setTodo(newTodo);
                    }}
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default Todo;
