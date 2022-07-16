import React from 'react';
import { useSelector } from 'react-redux';
import CheckBox from './CheckBox';

function List() {
  const activities = useSelector((state) => state.todo.value);
  return (

    <div className="">
      <ul>
        {activities.map((activity) => (
          <li className="shadow-inner h-12" key={activity.name}>
            <CheckBox />
            <span className="text-xl leading-[3rem] pl-12">{activity.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
