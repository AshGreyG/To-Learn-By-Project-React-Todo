/**
 * @program:     components/Form()
 * @description: Form() function is the component function of adding new todo items form
 */
export default function Form() {

  console.log("Form component has been initialized.");

  return (
    <form>
      <div className="input-group mb-3">

        {/* @input-group: https://getbootstrap.com/docs/5.3/forms/input-group/ */}

        <input 
          type="text"
          className="form-input form-control bg-dark text-white rounded-start"
          placeholder="Add new todo item here"
        />

        {/* @from-control: https://getbootstrap.com/docs/5.3/forms/form-control/ */}

        <button className="btn btn-success text-white rounded-end">
          +
        </button>
      </div>
    </form>
  )
}