import React from "react";
import ShowList from "./showList";

const ListItems = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <ShowList
          key={todo.id}
          todo={todo}
          onDelete={props.onDelete}
          onCompleted={props.onCompleted}
        />
      ))}
    </div>
  );
};

export default ListItems;
