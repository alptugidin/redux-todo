import React, { createRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveButton } from '../redux/todoSlice';

function Footer() {
  const footerRef = createRef();
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.todo.value);

  const [activeButton, setActiveButton] = useState('All');

  const filterOptions = (item) => {
    if (activeButton === 'All') {
      return item;
    } if (activeButton === 'Active') {
      return item.status === false;
    }
    return item.status === true;
  };

  const footerButton = (e) => {
    footerRef.current.childNodes.forEach((button) => {
      if (button.textContent === e.target.textContent) {
        setActiveButton(button.textContent);
        dispatch(changeActiveButton(button.textContent));
        button.classList.add('border-gray-400');
      } else {
        button.classList.remove('border-gray-400');
      }
    });
  };

  return (
    <div ref={footerRef} className="flex gap-3 justify-center p-3 relative">
      <div className="absolute left-3 text-sm">
        <span>
          {`${activities.filter((e) => filterOptions(e, activeButton)).length} `}

          items left
        </span>
      </div>
      <button
        onClick={footerButton}
        type="button"
        className="rounded-lg border border-gray-400 px-1 text-sm px-4"
      >
        All
      </button>
      <button
        onClick={footerButton}
        type="button"
        className="rounded-lg border border-gray-200 px-1 text-sm px-4"
      >
        Active
      </button>
      <button
        onClick={footerButton}
        type="button"
        className="rounded-lg border border-gray-200 px-1 text-sm px-4"
      >
        Completed
      </button>
      <button type="button" className="absolute right-3 border border-red-300 text-sm rounded-lg px-1">Clear Completed</button>
    </div>
  );
}

export default Footer;
