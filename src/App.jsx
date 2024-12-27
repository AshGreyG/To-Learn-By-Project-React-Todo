import Navbar from "./components/Navbar";
import Form from "./components/From";
import List from "./components/List";

export default function TodoApp() {
  return (
    <div className="wrapper bg-dark text-white">

      {/* Notice 'wrapper' here is not the bootstrap class, see in ./main.css */}

      <Navbar />
      <div className="container pt-5">
        <div className="col-12 col-lg-9 mx-auto mt-5 p-5 border border-light rounded-3">

          {/* @col-12: https://getbootstrap.com/docs/5.3/layout/columns/ */}
          {/*          so col-12 equals to ordering them row by row */}

          <Form />
          <List />
        </div>
        
      </div>
    </div>
  )
}