/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * @program:     components/Navbar()
 * @description: Navbar() function is the component function of navigation bar
 * @param {Object} param0 
 * @param {Array<Object>} param0.items        Navbar component uses 'items' to check if todoItems is empty
 * @param {React.Dispatch<React.SetStateAction<never[]>>} param0.onClearItems 
 *                                            Navbar component uses 'setTodoItems' function to clear 
 *                                            the todoItems
 */
export default function Navbar({
  items,
  onClearItems
}) {

  console.log("Navbar component has been initialized.");

  return (
    <nav className="navbar bg-dark px-5 py-3 border-bottom border-primary">

      {/* @navbar:   https://getbootstrap.com/docs/5.3/components/navbar/ */}
      {/* @bg-*:     https://getbootstrap.com/docs/5.3/utilities/background/ */}
      {/* @px / py:  https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding */}
      {/* @border-*: https://getbootstrap.com/docs/5.3/utilities/borders/ */}

      <div className="container-fluid">

        {/* @container-fluid: https://getbootstrap.com/docs/5.3/layout/containers/#how-they-work */}

        <a 
          className="navbar-brand text-white"
          href="#"
        >
          React Todo Application
        </a>

        {/* @navbar-brand: https://getbootstrap.com/docs/5.3/components/navbar/#supported-content */}
        {/* @text-white:   https://getbootstrap.com/docs/5.3/utilities/colors/ */}

        <button
          className="btn btn-danger rounded-1 text-white"
          onClick={() => onClearItems([])}
          disabled={items.length === 0}
        >
          Clear Items
        </button>

        {/* @btn(-*): https://getbootstrap.com/docs/5.3/components/buttons/ */}
      </div>
    </nav>
  )
}