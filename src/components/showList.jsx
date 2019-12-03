import React from "react";

const ShowList = props => {
  return (
    <div className="list">
      <input type="checkbox" onClick={() => props.onCompleted(props.todo.id)} />
      <p style={{ textDecoration: props.todo.completed ? "line-through" : "" }}>
        {props.todo.text}
      </p>
      <span onClick={() => props.onDelete(props.todo.id)}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default ShowList;
