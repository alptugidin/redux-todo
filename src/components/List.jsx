import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import { getAsyncTodo } from '../redux/todoSlice';
import Remove from './Remove';
import CheckBox from './CheckBox';
import Error from './Error';

function List() {
  const activities = useSelector((state) => state.todo.value);
  const activeButton = useSelector((state) => state.todo.activeButton);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todo.isLoading);
  const error = useSelector((state) => state.todo.error);

  useEffect(() => {
    dispatch(getAsyncTodo());
  }, []);

  if (isLoading) {
    return <Loading />;
  } if (error !== null) {
    return <Error message={error} />;
  }

  const filterOptions = (item) => {
    if (activeButton === 'All') {
      return item;
    } if (activeButton === 'Active') {
      return item.status === false;
    }
    return item.status === true;
  };

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
