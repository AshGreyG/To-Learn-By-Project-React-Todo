export default function List() {
  return (
    <ul className="list-group rounded-0">

      {/* @list-group: https://getbootstrap.com/docs/5.3/components/list-group/ */}

      <li className="list-group-item d-flex justify-content-between align-items-center bg-dark border-0 text-white p-0">
        <div className="input-group m-0">
          <div className="input-group-text">
            <input 
              className="form-check-input mt-0 bg-dark border-1 " 
              type="checkbox" 
              value="" 
            />
          </div>
          <span className="bg-dark text-white border border-1 border-white rounded-end rounded-1 ">
            Item
          </span>
        </div>
      </li>
    </ul>
  )
}