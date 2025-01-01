import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import List from "./components/List";

/**
 * @program:     entry/TodoApp()
 * @description: TodoApp() function is the entry function.
 */
export default function TodoApp() {

  const [todoItems, setTodoItems] = useState([]);
  // todoItems is an array of todo item objects

  const [formAddText, setFormAddText] = useState("");

  const [buttonEditText, setButtonEditText] = useState("");

  console.log("TodoApp has been initialized.");

  return (
    <div className="wrapper bg-dark text-white">

      {/* Notice 'wrapper' here is not the bootstrap class, see in ./main.css */}

      <Navbar
        items={todoItems}
        onClearItems={setTodoItems}
      />
      <div className="container pt-5">
        <div className="col-12 col-lg-9 mx-auto mt-5 p-5 border border-light rounded-3 bg-white bg-opacity-10">

          {/* @col-12: https://getbootstrap.com/docs/5.3/layout/columns/ */}
          {/*          so col-12 equals to ordering them row by row */}

          <TodoForm
            items={todoItems}
            text={formAddText}
            onFlashText={setFormAddText}
            onAddItem={setTodoItems}
          />
          <List 
            items={todoItems}
            flashText={buttonEditText}
            onFlashText={setButtonEditText}
            onChangeItem={setTodoItems}
            onDeleteItem={setTodoItems}
          />
        </div>
      </div>
    </div>
  )
}