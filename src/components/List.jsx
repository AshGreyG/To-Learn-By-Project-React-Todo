import React, { useState } from 'react';

function ListItem(todoString) {
  
  const [isChecked, setIsChecked] = useState(false);

  // https://react.dev/learn#updating-the-screen
  // The isChecked state is settled as false by default

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(`This event comes from ${event.target.type}, `,
                `and its value is ${event.target.checked}`);
    // @event.target:                 https://react.dev/reference/react-dom/components/input#my-checkbox-doesnt-update-when-i-click-on-it
    // @event.target.type / .checked: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#checked
  }

  return (
    <li className="list-group-item bg-dark text-white justify-content-between align-items-center border rounded-1 m-2">
      <div className="container d-flex-row m-0 p-0">
        <div className="row align-items-center">
          <div className="col-1">
            <input 
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
          <div 
            className="col-10"
            style={{textDecoration: isChecked ? "line-through" : "none", 
                    color: isChecked ? "grey" : "white" }}
          >
            {todoString.text}
          </div>
          <div className="col-1">
            <i className="bi bi-pencil-square text-success pointer" />

            {/* @pointer: Not bootstrap class, see ../main.css */}

          </div>
        </div>
      </div>
    </li>
  )
}

function List() {
  return (
    <ul className="list-group rounded-0">

      {/* @list-group: https://getbootstrap.com/docs/5.3/components/list-group/ */}

      <ListItem text={"This is a test"}/>
      <ListItem />
    </ul>
  )
}

export default List;