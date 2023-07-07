import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { inject, cleanup } from 'app2/appInjector';
import { Header } from './Header';
// import loadable from '@loadable/component';
import { importRemote } from 'module-federation-import-remote';
import './index.scss';
import './test.css';
// import type { ContentProps } from 'cart/Content';

// import { CartPage } from 'cart/CartPage';
// import { TestPage } from 'cart/TestPage';
const parentElementId = 'parent';
const App = () => {

  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [state, setState] = React.useState<string>('');
  useEffect(() => {
    inject(parentElementId);
    return () => cleanup(parentElementId);
  }, []);
  return (
    <div className="mt-10 text-2xl mx-auto max-w-6xl">
      <div id={parentElementId}></div>
      {/* <TestPage app={'EMI'} /> */}
      <Header />
      <h1 className='test'>CSR Example</h1>

      {/* <CartPage app={count} /> */}
      <button onClick={increment}>Click me +1</button>
      <h1> Lazy Load Example</h1>
      <div style={{ padding: '1rem' }}>
        <h3>Type something into this input</h3>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Type Something..."
        />
      </div>
      <div>
        <button onClick={() => setIsVisible((value) => !value)}>
          Toggle Content
        </button>
      </div>

      <Header />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
