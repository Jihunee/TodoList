# Input Component 코드


    export function Input({ toDo, setTodo }) {
      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");

     return (
        <div>
          <div className="inputBox">
            제목 :{" "}
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="제목을 입력해주세요"
            />
            내용 :{" "}
            <input
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="내용을 입력해주세요"
            />
            <button
              className="btn"
              onClick={() => {
                if (title === "") {
                  alert("제목을 입력해주세요");
                  return false;
                } else if (content === "") {
                  alert("내용을 입력해주세요");
                  return false;
                }
                const newTodo = {
                  id: uuid(),
                  title,
                  content,
                  isDone: false,
                };

                setTodo([...toDo, newTodo]);
                setTitle("");
                setContent("");
              }}
            >
              추가!
            </button>
          </div>
        </div>
      );
    }

   


# Todo Component 코드


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
