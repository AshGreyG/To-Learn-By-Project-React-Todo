# To-Learn-By-Project-React-Todo

This is a exercise project, using [react](https://github.com/facebook/react) to create an easy demo: Todo List App. There are some tips I learned from this project:

1. For **global** states, we can define them in entry file `App.jsx` and pass them through JSX props:

  ``` jsx
  export default function TodoApp() {
    const [todoItems, setTodoItems] = useState([]);
    // todoItems is an array of todo item objects
    const [formAddText, setFormAddText] = useState("");
    return (
      <div className="wrapper bg-dark text-white">
        <Navbar
          items={todoItems}
          onClearItems={setTodoItems}
        />
      </div>
    )
  }
  ```

2. For a component, if we have to define some states variable in it, it's better for us to not use `props` itself as the initializing object:

  ``` jsx
  let initText = item.text;
  const [currentContent, setCurrentContent] = useState(initText);
  ```

