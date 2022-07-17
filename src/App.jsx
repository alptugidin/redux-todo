import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Footer from './components/Footer';
import List from './components/List';
import Input from './components/Input';

function ToDo() {
  return (
    <Provider store={store}>
      <Input />
      <List />
      <Footer />
    </Provider>
  );
}

function App() {
  return (
    <div className="p-20 bg-gray-100 h-screen">
      <p className="text-center text-7xl text-gray-400 font-light mb-5">
        todos
      </p>
      <div className="w-[600px] bg-white shadow-xl border border-gray-200 mx-auto rounded-xl">
        <ToDo />
      </div>
    </div>
  );
}

export default App;
