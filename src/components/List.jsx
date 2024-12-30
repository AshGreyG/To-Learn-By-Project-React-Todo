import React, { useState } from "react";

/**
 * @program:     component/ListItem()
 * @description: ListItem() function is the component function of list items
 * @param {string} todoString  The content of ListItem
 */
function ListItem(todoString) {

  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentContent, setCurrentContent] = useState(todoString.text);

  // currentContent is designed to exchange data between plaintext element and text input element
  // 
  // Form ▸ todoString ▸ currentContent ▸ id: showing-item-content
  //                           ▴                     ▾
  //            handleCompletedEditing  ◂ id: editing-item-content

  // https://react.dev/learn#updating-the-screen
  // The isChecked state is settled as false by default

  /**
   * @program:     eventHandler/handleCheckboxChange()
   * @description: handleCheckboxChange anonymous function is to handle the event trigger by checkbox changing
   * @param {Event} event The event.target is an object of HTMLInputElement, whose type is checkbox
   */
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(`This event comes from ${event.target.id}, `,
                `and its value is ${event.target.checked}`);
    // @event.target:                 https://react.dev/reference/react-dom/components/input#my-checkbox-doesnt-update-when-i-click-on-it
    // @event.target.type / .checked: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#checked
  }

  const handleEditing = (event) => {
    setIsEditing(true);
    console.log(`This event comes from ${event.target.id}`);
  }

  // const handleCompletedEditing = (event) => {

  //   const validKeys = /^[a-zA-Z0-9\s]$/;

  //   if (event.key === "Enter") {

  //     // When user presses "Enter" key, the editing input will be closed.

  //     console.log("Editing input : \"Enter\" key has been pressed. Complete editing.");
  //     setIsEditing(false);
  //   } else if (validKeys.test(event.key)) {

  //     // When user enter 0-9 a-z 

  //     setCurrentContent(currentContent + event.key);
  //     console.log(`Editing input : ${event.key} key has been pressed. `, 
  //                 `Now the currentContent is "${currentContent}".`);
  //   } else {
  //     console.log(`Editing input : ${event.key} key has been pressed, `,
  //                 `and it's not we needed.`);
  //   }
  // }

  // This function can't deal with Chinese character!!!!
  // It's just a simple simulation

  const handleCompletedEditing = (event) => {
    setCurrentContent(event.target.value);
    if (event.target.value.includes("\\n")) {
      setIsEditing(false);
      console.log("User presses \"Enter\" key, the input will be closed.");
    } else {
      console.log(`Current content is "${event.target.value}"`);
    }
  }

  return (
    <li className="list-group-item bg-dark text-white justify-content-between align-items-center border rounded-1 m-2">
      <div className="container d-flex-row m-0 p-0">
        <div className="row align-items-center">
          <div className="col-1">
            <input 
              id="check-item-completed"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>

          {!isEditing ? (
            <div 
              id="showing-item-content"
              className="col-10"
              style={{textDecoration: isChecked ? "line-through" : "none", 
                      color: isChecked ? "grey" : "white" }}
            >
              {currentContent}
            </div>
          ) : (
            <div
              className="col-10 bg-dark"

            >
              <input 
                id="editing-item-content"
                className="bg-dark text-white border-0"
                type="text"
                value={currentContent}
                onChange={handleCompletedEditing}
                autoFocus={true}
                enterKeyHint="go"
              />
            </div>
          )}

          {/*  */}

          <div className="col-1">
            <i 
              id="click-to-edit-item-content"
              className="bi bi-pencil-square text-success pointer"
              onClick={handleEditing}
            />

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