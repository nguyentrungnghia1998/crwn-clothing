import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CardProvider } from './contexts/card.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
=======
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

import './index.scss';

const rootElement = document.getElementById('root');

render(
>>>>>>> 2f16e5b390155682bc1f79e8fccb62717b4a7e5e
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
<<<<<<< HEAD
          <CardProvider>
             <App />
          </CardProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
>>>>>>> 2f16e5b390155682bc1f79e8fccb62717b4a7e5e
