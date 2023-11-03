TOdo Component

const Todo = ({ item, clickDeleteHaneler, checkedHandler }) => {
  return (
    <div key={item.id} className="list">
      <h1>{item.title}</h1>
      {item.content}
      <div className="btnBox">
        <button
          className="deletebtn"
          onClick={() => clickDeleteHaneler(item.id)}
        >
          삭제하기
        </button>
        <button className="sucessbtn" onClick={() => checkedHandler(item)}>
          완료하기
        </button>
      </div>
    </div>
  );
};

export default Todo;


DoneTodo Component

const DoneTodo = ({ done, deleteDoneTodoHandler, doneCancelHandler }) => {
  return (
    <div key={done.id} className="list">
      <h1>{done.title}</h1>
      {done.content}
      <div className="btnBox">
        <button
          className="deletebtn"
          onClick={() => deleteDoneTodoHandler(done.id)}
        >
          삭제하기
        </button>
        <button className="sucessbtn" onClick={() => doneCancelHandler(done)}>
          취소하기
        </button>
      </div>
    </div>
  );
};

export default DoneTodo;
