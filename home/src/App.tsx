import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import './index.scss';
import { CartPage } from 'cart/CartPage';
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <CartPage app={'Calling from home app'} />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
