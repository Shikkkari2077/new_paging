import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, pagingChange, total }) => {
  const [counter, setCounter] = useState(1);
  
  const numBtn = Math.ceil(total / showPerPage);

  useEffect(() => {
    const value = showPerPage * counter;
    pagingChange(value - showPerPage, value);
  }, [counter]);

  const btnClick = (type) => {
    if (type == "prev") {
      if (counter == 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if ((type = "next")) {
      if (numBtn == counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="!#"  onClick={() => btnClick("prev")}>
              Previous
            </a>
          </li>
          
            {new Array(numBtn).fill('').map((el, index)=>(
                <li class={`page-item ${index+1==counter?'active':null}`}>
                <a class="page-link" href="!#" onClick={()=>setCounter(index+1)}>
                  {index+1}
                </a>
              </li>
            ))}
          <li class="page-item">
            <a class="page-link" href="!#" onClick={() => btnClick("next")}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
