import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo, setAll } from '../redux/todoSlice';
import Dropdown from './Dropdown';

function Input() {
  const [value, setValue] = useState('');
  const [ddState, setDdState] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '') {
      dispatch(addTodo({ id: nanoid(), name: value, status: false }));
      setValue('');
    }
  };

  const handleClick = () => {
    setDdState(!ddState);
    dispatch(setAll(ddState));
  };

  return (
    <div>
      <form
        action=""
        className="relative"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          className="absolute left-3 top-3 rounded-full border border-gray-200 hover:border-gray-400 transition-all"
          onClick={handleClick}
        >
          <Dropdown active={ddState} />
        </button>
        <input
          type="text"
          className="w-full h-12 rounded-t-xl outline-none shadow pl-12 text-xl text-gray-500"
          placeholder="What needs to be done?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>

    </div>
  );
}

export default Input;
