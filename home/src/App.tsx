import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import loadable from '@loadable/component';
import { importRemote } from 'module-federation-import-remote';
import './index.scss';
import type { ContentProps } from 'cart/Content';

const Content = React.lazy(
  () => import('cart/Content') as Promise<{ default: React.FC<ContentProps> }>
);

import { CartPage } from 'cart/CartPage';

const App = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [state, setState] = React.useState<string>('');

  return (
    <div className="mt-10 text-2xl mx-auto max-w-6xl">
      <Header />
      <h1>CSR Example</h1>
      <CartPage app={count} />
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
      {isVisible && (
        <React.Suspense fallback={<h1>Loading....</h1>}>
          <Content content={state} />
        </React.Suspense>
      )}
      <Header />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
