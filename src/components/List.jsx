export default function List() {
  return (
    <ul className="list-group rounded-0">

      {/* @list-group: https://getbootstrap.com/docs/5.3/components/list-group/ */}

      <li className="list-group-item bg-dark text-white justify-content-between align-items-center rounded-1">
        <div className="container d-flex-row m-0 p-0">
          <div className="row align-items-center">
            <div className="col-1">
              <input type="checkbox"/>
            </div>
            <div className="col-10">
              This is a test
            </div>
            <div className="col-1">
              <i className="bi bi-pencil-square text-success pointer" />

              {/* @pointer: Not bootstrap class, see ../main.css */}

            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}