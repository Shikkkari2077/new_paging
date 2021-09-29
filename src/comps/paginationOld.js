import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, pagingChange, total }) => {
  const [counter, setCounter] = useState(1);

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
    }else if(type='next'){
        if(Math.ceil(total/showPerPage)==counter){
            setCounter(counter)
        }else {
            setCounter(counter+1)
        }
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-primary" onClick={() => btnClick("prev")}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={() => btnClick("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
