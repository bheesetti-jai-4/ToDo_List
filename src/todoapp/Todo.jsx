


// import { useState } from "react";
// import Todochild from "./todochild";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Todo() {
//   const [addvalues, setaddvalues] = useState("");
//   const [todolist, settodolist] = useState([]);

//   const changingHandler = (e) => {
//     setaddvalues(e.target.value);
//   };

//   const preventhandlers = (e) => {
//     e.preventDefault();
//     if (addvalues.trim() === "") return;
//     const newtodo = [...todolist, addvalues];
//     settodolist(newtodo);
//     setaddvalues("");
//   };

//   const handleDelete = (indexval) => {
//     settodolist(todolist.filter((_, index) => index !== indexval));
//   };

//   return (
//     <div className="container mt-5 w-50">
//       <div className="card shadow-lg p-4">
//         <h2 className="text-center text-primary mb-4">Todo List</h2>
//         <form onSubmit={preventhandlers} className="d-flex gap-2">
//           <input
//             type="text"
//             placeholder="Enter anything..."
//             value={addvalues}
//             onChange={changingHandler}
//             className="form-control"
//           />
//           <button type="submit" className="btn btn-success">
//             Add
//           </button>
//         </form>
//         <div className="mt-3">
//           <Todochild todoarray={todolist} handleDelete={handleDelete} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Todo;


import { useState } from "react";
import Todochild from "./Todochild";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todo.css"; // Import custom styles

function Todo() {
  const [addvalues, setaddvalues] = useState("");
  const [todolist, settodolist] = useState([]);

  const changingHandler = (e) => {
    setaddvalues(e.target.value);
  };

  const preventhandlers = (e) => {
    e.preventDefault();
    if (addvalues.trim() === "") return;
    const newtodo = [...todolist, addvalues];
    settodolist(newtodo);
    setaddvalues("");
  };

  const handleDelete = (indexval) => {
    settodolist(todolist.filter((_, index) => index !== indexval));
  };

  return (
    <div className="container todo-container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary mb-4">Todo List</h2>
        <form onSubmit={preventhandlers} className="d-flex gap-2">
          <input
            type="text"
            placeholder="Enter anything..."
            value={addvalues}
            onChange={changingHandler}
            className="form-control"
          />
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
        <div className="mt-3">


          <Todochild todoarray={todolist} handleDelete={handleDelete} />

          
        </div>
      </div>
    </div>
  );
}

export default Todo;

