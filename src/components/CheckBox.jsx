import React from 'react';
import { useDispatch } from 'react-redux';
import { updateAsyncTodo, updateTodo } from '../redux/todoSlice';

function CheckBox({ status }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    // dispatch(updateTodo(e.currentTarget.parentNode.textContent));
    const name = e.currentTarget.parentNode.textContent;
    dispatch(updateAsyncTodo({ name }));
  };
  return (
    <button
      type="button"
      className="absolute left-3 top-3 border border-gray-200 hover:border-gray-400 transition-all rounded-full w-[24px] h-[24px] cursor-pointer"
      onClick={handleClick}
    >
      <div className={`ml-[4px] mt-[1px] ${status ? ' block' : ' hidden'}`}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.9725 0.95731C22.5188 0.64243 21.8959 0.754828 21.5809 1.20838L10.3062 17.443C9.97373 17.9218 9.30394 18.0159 8.85244 17.6473L2.19739 12.214C1.7695 11.8647 1.13941 11.9285 0.790186 12.3564L0.632049 12.5502C0.282951 12.9781 0.346688 13.6079 0.774423 13.9571L9.31391 20.9289C9.76541 21.2975 10.4352 21.2034 10.7677 20.7246L23.4295 2.49211C23.7445 2.03841 23.6321 1.4152 23.1783 1.10022L22.9725 0.95731Z"
            fill="green"
          />
        </svg>
      </div>
    </button>

  );
}

export default CheckBox;
