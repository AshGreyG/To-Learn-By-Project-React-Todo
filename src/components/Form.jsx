/**
 * @program:     components/Form()
 * @description: Form() function is the component function of adding new todo items form
 */
export default function Form() {
  return (
    <form>
      <div className="input-group mb-3">

        {/* @input-group: https://getbootstrap.com/docs/5.3/forms/input-group/ */}

        <input 
          type="text"
          className="form-control rounded-0 bg-transparent text-white rounded-1"
          placeholder="Add new todo item here"
        />

        {/* @from-control: https://getbootstrap.com/docs/5.3/forms/form-control/ */}

        <button className="btn btn-success text-white rounded-1">
          Submit
        </button>
      </div>
    </form>
  )
}