import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import './index.scss';
import { TestPage } from 'cart/TestPage';
import { CartPage } from 'cart/CartPage';
const App = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      {/* <TestPage app={'Calling from new home test'} /> */}
      <CartPage app={count} />

      <button onClick={increment}>Click me +1</button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
