import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAsyncTodo, removeTodo } from '../redux/todoSlice';

function Remove() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    // dispatch(removeTodo(e.currentTarget.parentNode.textContent));
    const name = e.currentTarget.parentNode.textContent;
    dispatch(deleteAsyncTodo({ name }));
  };
  return (
    <button
      type="button"
      id="remove"
      className="absolute right-3 top-3 cursor-pointer hidden"
      onClick={handleClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 6L18 18M6 18L18 6L6 18Z"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default Remove;
