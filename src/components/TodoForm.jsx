/**
 * @program:     components/Form()
 * @description: Form() function is the component function of adding new todo items form
 * @param {Object} param0 
 * @param {Array<Object>} param0.items TodoForm component uses 'items' to copy to new items array.
 * @param {String} param0.text         TodoForm component uses 'text' to flash the input text, that is to 
 *                                     get the latest input text when submit button is clicked.
 * @param {React.Dispatch<React.SetStateAction<never[]>>} param0.onFlashText
 *                                     TodoForm component uses 'onFlashText' function to flash the input
 * @param {React.Dispatch<React.SetStateAction<never[]>>} param0.onAddItem
 *                                     TodoForm component uses 'onAddItem' function to add items
 */
export default function TodoForm({
  items,
  text,
  onFlashText,
  onAddItem
}) {

  console.log("TodoForm component has been initialized.");

  const handleFlashEditing = (event) => {
    onFlashText(event.target.value);
    console.log("Input text now changes to ", text);
  }

  const handleSubmitTodo = (event) => {
    let item = { id : Date.now(), text : text };
    onAddItem([...items, item]);
    onFlashText("");
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
          value={text}
          onChange={handleFlashEditing}
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