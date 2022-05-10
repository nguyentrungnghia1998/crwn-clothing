<<<<<<< HEAD
import Home from "./routes/home/home.components";

import Navigation from "./routes/navigation/navigation.component"
import { Routes, Route} from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
=======
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
>>>>>>> 2f16e5b390155682bc1f79e8fccb62717b4a7e5e

const App = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout/>} />
      </Route>
    </Routes>
  )
}
=======
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};
>>>>>>> 2f16e5b390155682bc1f79e8fccb62717b4a7e5e

export default App;
