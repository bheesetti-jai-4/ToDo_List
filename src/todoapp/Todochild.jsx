// /* eslint-disable react/prop-types */


// function Todochild({todoarray,handleDelete}) {

//     const total = todoarray.map((item,index)=>(
//         <div key={index} >
//             <h4>{item}  <button onClick={()=>handleDelete(index)} >Delete</button> </h4>
//         </div>
//     ))

//   return (
//     <div>
//         {total}
//     </div>
//   )
// }

// export default Todochild



// applying styles only on css bootstrap 

/* eslint-disable react/prop-types */

function Todochild({ todoarray, handleDelete }) {
  const total = todoarray.map((item, index) => (
    <div
      key={index}
      className="d-flex justify-content-between align-items-center bg-light p-2 my-2 rounded shadow-sm"
    >
      <h4 className="mb-0 text-dark">{item}</h4>
      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
        Delete
      </button>
    </div>
  ));

  return <div className="mt-3">{total}</div>;
}

export default Todochild;
