import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Remove from './Remove';
import CheckBox from './CheckBox';

function List() {
  const activities = useSelector((state) => state.todo.value);
  const activeButton = useSelector((state) => state.todo.activeButton);
  const [takenData, setTakenData] = useState('');
  const filterOptions = (item) => {
    if (activeButton === 'All') {
      return item;
    } if (activeButton === 'Active') {
      return item.status === false;
    }
    return item.status === true;
  };

  useEffect(() => {
    axios.get('/todos')
      .then((response) => setTakenData(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      <ul id="todo-ul">
        {
          activities.filter((e) => filterOptions(e)).map((activity) => (
            <li
              className="custom-li border border-x-0 border-t-0 border-b-gray-200 h-12 relative"
              key={activity.id}
            >
              <CheckBox status={activity.status} />
              <span className={`text-xl transition-all leading-[3rem] pl-12 ${activity.status && 'line-through text-gray-400'}`}>
                {activity.name}
              </span>
              <Remove />
            </li>
          ))
        }
      </ul>
    </div>

  );
}

export default List;
