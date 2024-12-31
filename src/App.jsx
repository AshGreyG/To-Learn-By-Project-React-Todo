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

  /**
   * @program:       utility/addItem()
   * @description:   addItem anonymous function is to add new item to the todoItems
   * @param {object} item The new added item
   */
  const addItem = (item) => {
    console.log("Add new item to the todoItems", item);
    setTodoItems([...todoItems, item]);
    console.log(todoItems);
  }

  /**
   * @program:       utility/changeItem()
   * @description:   changeItem anonymous function is to change the specific item in todoItems
   * @param {object} item The item that needs to be changed
   */
  function changeItem(item) {
    console.log(`Change the specific item`, item, this);

    let temp = todoItems;
    // Can't change todoItems using forEach function, we need a temp object arrays
    // forEach changes the target array itself

    temp.forEach((idx, text) => {
      if (idx === item.id) {
        text = item.text;
      }
    });
    setTodoItems(temp);
    console.log(todoItems);
  }

  const deleteItem = (item) => {
    console.log("Delete the specific item", item);
    setTodoItems(todoItems.filter((current) => current.id !== item.id));
    console.log(todoItems);
  }

  /**
   * @program:     utility/clearItems()
   * @description: clearItems anonymous function is to clear the todoItem
   */
  const clearItems = () => setTodoItems([]);

  console.log("TodoApp has been initialized.");

  return (
    <div className="wrapper bg-dark text-white">

      {/* Notice 'wrapper' here is not the bootstrap class, see in ./main.css */}

      <Navbar
        items={todoItems}
        clearItems={clearItems}
      />
      <div className="container pt-5">
        <div className="col-12 col-lg-9 mx-auto mt-5 p-5 border border-light rounded-3 bg-white bg-opacity-10">

          {/* @col-12: https://getbootstrap.com/docs/5.3/layout/columns/ */}
          {/*          so col-12 equals to ordering them row by row */}

          <TodoForm
            items={todoItems} 
            addItem={addItem} 
          />
          <List 
            items={todoItems} 
            changeItem={changeItem}
            deleteItem={deleteItem}
          />
        </div>
      </div>
    </div>
  )
}