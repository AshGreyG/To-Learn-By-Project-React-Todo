import React, { useState } from "react";

/**
 * @program:     component/ListItem()
 * @description: ListItem() function is the component function of list items
 * @param {object} props  The content of ListItem
 */
function ListItem({id, text, changeItem, deleteItem}) {
  
  console.log(`List item ${id} has been initialized.`);

  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentContent, setCurrentContent] = useState(text);

  // currentContent is designed to exchange data between <div> element and <input> element
  // 
  // Form ▸ props ▸ currentContent ▸ id: showing-item-content
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

  const handleDeleting = (event) => {
    deleteItem({ id : id, text : text});
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

  const handleFlashEditing = (event) => {
    setCurrentContent(event.target.value);
    console.log(`Current content is "${event.target.value}"`);
  }

  const handleSubmitEditContent = (event) => {
    event.preventDefault();
    setIsEditing(false);
    changeItem({ id : id, text : currentContent});
    console.log("Default submit has been prevented, exit the editing mode.");
  }

  return (
    <li 
      className="list-group-item bg-dark text-white justify-content-between align-items-center border rounded-1 m-2"
      key={id}
    >
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
              className="col-9"
              style={{textDecoration: isChecked ? "line-through" : "none", 
                      color: isChecked ? "grey" : "white" }}
            >
              {currentContent}
            </div>
          ) : (
            <div
              className="col-9 bg-dark"
            >
              <form onSubmit={handleSubmitEditContent}>
                <input 
                  id="editing-item-content"
                  className="bg-dark text-white border-0"
                  type="text"
                  value={currentContent}
                  onChange={handleFlashEditing}
                  autoFocus={true}
                />
              </form>
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

          <div className="col-1">
            <i 
              id="click-to-delete-item-content"
              className="bi bi-trash text-danger pointer"
              onClick={handleDeleting}
            />
          </div>
        </div>
      </div>
    </li>
  )
}

/**
 * @program:
 * @description:  List() function is the component function of List whose sub-elements are ListItem
 * @param {Object} param0 This is an anonymous parameter.
 * @param {Object[]} param0.items todoItems
 * @param {}
 */
function List({items, changeItem, deleteItem}) {

  console.log("List component has been initialized.");

  return (
    <ul className="list-group rounded-0">

      {/* @list-group: https://getbootstrap.com/docs/5.3/components/list-group/ */}

      { items.map((item) => { 
        console.log(`Item ${item.id} has been created`, item);
        return ( 
          <ListItem 
            id={item.id}
            text={item.text}
            changeItem={changeItem}
            deleteItem={deleteItem}
          /> 
        ) 
       })
      }

    </ul>
  )
}

export default List;