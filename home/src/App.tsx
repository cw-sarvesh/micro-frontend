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

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <CartPage app={count} />
      <button onClick={increment}>Click me +1</button>
      <div>
        <button onClick={() => setIsVisible((value) => !value)}>
          Toggle Content
        </button>
      </div>
      {isVisible && (
        <React.Suspense fallback={<h1>Loading....</h1>}>
          <Content content={'hello'} />
        </React.Suspense>
      )}
      <Header />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
