import React from 'react';

function Error({ message }) {
  return (
    <div>
      <p className="text-center p-10 text-2xl text-red-400">
        Error!
        {' '}
        {message}
      </p>
    </div>
  );
}

export default Error;
