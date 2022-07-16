import React, { useState } from 'react';
import Dropdown from './Dropdown';

function Input() {
  const [ddState, setDdState] = useState(false);

  return (
    <div>
      <form action="" className="relative">
        <div
          role="presentation"
          className="absolute left-0 top-0 mt-3 ml-3 rounded-full border border-gray-200 hover:border-gray-400 transition-all"
          onClick={() => setDdState(!ddState)}
        >
          <Dropdown active={ddState} />
        </div>
        <input
          type="text"
          className="w-full h-12 rounded-t-xl outline-none shadow pl-12 text-xl text-gray-500"
          placeholder="What needs to be done?"
        />
      </form>

    </div>
  );
}

export default Input;
