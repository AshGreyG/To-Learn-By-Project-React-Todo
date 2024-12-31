import React, { useState } from "react";

/**
 * @program:     components/Form()
 * @description: Form() function is the component function of adding new todo items form
 */
export default function TodoForm({addItem}) {

  console.log("TodoForm component has been initialized.");

  const [inputText, setInputText] = useState("");

  const handleSubmitTodo = (event) => {
    let item = { id : Date.now(), text : inputText};
    addItem(item);
    setInputText("");
    console.log("Add new todo item and clear the input", item);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="input-group mb-3">

        {/* @input-group: https://getbootstrap.com/docs/5.3/forms/input-group/ */}

        <input 
          type="text"
          className="form-input form-control bg-dark text-white rounded-start"
          placeholder="Add new todo item here"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />

        {/* @from-control: https://getbootstrap.com/docs/5.3/forms/form-control/ */}

        <button 
          className="btn btn-success text-white rounded-end" 
          onClick={handleSubmitTodo}
        >
          +
        </button>

        {/* There was a horrible bug : infinite loop to call addItem()      */}
        {/* notice if function passes by parameter, if we cant to call them */}
        {/* we should use anonymous function to wrap it, like this          */}
        {/*      addItem(...)   -----------> () => addItem(...)             */}

      </div>
    </form>
  )
}